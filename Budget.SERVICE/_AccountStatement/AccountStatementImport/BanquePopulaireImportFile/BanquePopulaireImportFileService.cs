using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.SERVICE._Helpers;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class BanquePopulaireImportFileService : BankingImportService, IBanquePopulaireImportFileService
    {
        private readonly IAccountStatementImportFileService _asifService;
        private readonly ReferentialService _referentialService;

        public BanquePopulaireImportFileService(
            IAccountStatementImportFileService asifService,
            ReferentialService referentialService
            )
        {
            _asifService = asifService;
            _referentialService = referentialService;
        }


        public override List<AccountStatementImportFile> ImportFile(StreamReader reader, AccountStatementImport accountStatementImport, User user)
        {
            reader.DiscardBufferedData();
            reader.BaseStream.Seek(0, SeekOrigin.Begin);

            List<AccountStatementImportFile> accountStatementImportFiles = new List<AccountStatementImportFile>();
            int currentLineNumber = 0;
            while (!reader.EndOfStream)
            {
                var line = reader.ReadLine();
                if (currentLineNumber != 0)
                {
                    var values = line.Split(';');

                    AccountStatementImportFile asif = _asifService.InitForImport(user.IdUserGroup);
                    asif.Id = currentLineNumber;
                    asif.IdImport = accountStatementImport.Id;
                    asif.DateImport = DateTime.Now;
                    asif.Reference = values[4].ToString();
                    asif.LabelOperation = values[3].ToString();//.Replace("\t","").Replace("\"","");
                    asif.LabelOperationCopy = GetLabelOperationCopy(asif.LabelOperation);
                    asif.LabelOperationWork = _asifService.GetOperationLabelWork(asif.LabelOperationCopy);

                    asif.AmountOperation = double.Parse(values[6].Replace(",", ".").ToString(), CultureInfo.InvariantCulture);
                    asif.DateIntegration = DateTime.ParseExact(values[1].ToString(), "dd/MM/yyyy", CultureInfo.CurrentCulture); //Convert.ToDateTime(values[1].ToString());
                    asif.IdMovement = asif.AmountOperation > 0 ? 1 : 2;
                    asif.Account = _referentialService.AccountService.GetByNumber(values[0].ToString());
                    if (asif.Account != null)
                        asif.IdAccount = asif.Account.Id;

                    OperationMethod operationMethod = _referentialService.OperationMethodService.GetOperationMethodByFileLabel(asif.LabelOperationWork, EnumBankFamily.BanquePopulaire);
                    asif.IdOperationMethod = operationMethod.Id;

                    //Date Operation
                    switch (asif.IdOperationMethod)
                    {
                        case (int)EnumOperationMethod.PaiementCarte:
                            asif.DateOperation = GetDateOperationByFileLabel(asif.LabelOperationWork, EnumOperationMethod.PaiementCarte);
                            break;
                        case (int)EnumOperationMethod.RetraitCarte:
                            asif.DateOperation = GetDateOperationByFileLabel(asif.LabelOperationWork, EnumOperationMethod.RetraitCarte);
                            break;
                    }

                    //Determination de operationDetail (operation+addresse) à partir des keywords
                    OperationDetail operationDetail = _asifService.GetOperationDetail(user.IdUserGroup, asif);
                    if (operationDetail != null)
                    {
                        asif.IdOperation = operationDetail.Operation.Id;
                        asif.IdOperationType = operationDetail.Operation.IdOperationType;
                        asif.IdOperationTypeFamily = operationDetail.Operation.OperationType.IdOperationTypeFamily;
                        asif.IdOperationDetail = operationDetail.Id;
                        asif.OperationLabelTemp = operationDetail.Operation.Label;
                        asif.OperationKeywordTemp = operationDetail.KeywordOperation;
                        asif.PlaceLabelTemp = operationDetail.KeywordPlace;
                        asif.PlaceKeywordTemp = operationDetail.KeywordPlace;
                    }
                    else
                    {
                        //Determination de operationDetail (operation+addresse) à partir du label brut
                        OperationType operationType = _referentialService.OperationTypeService.GetUnknown(user.IdUserGroup);

                        asif.IdOperationType = operationType.Id;
                        asif.IdOperationTypeFamily = operationType.IdOperationTypeFamily;

                        //rechercher les labels et keyword sur libellé brut
                        OperationInformation operationInformation = GetOperationInformationByParsingLabel(user.IdUserGroup, asif.LabelOperationCopy, asif.LabelOperationWork, operationMethod);

                        if (operationInformation != null)
                        {
                            //asif.IdOperation = operationInformation.IdOperation;
                            asif.OperationLabelTemp = operationInformation.OperationLabel;
                            asif.OperationKeywordTemp = operationInformation.OperationKeyword;
                            asif.PlaceLabelTemp = operationInformation.PlaceLabel;
                            asif.PlaceKeywordTemp = operationInformation.PlaceKeyword;
                        }
                    }

                    accountStatementImportFiles.Add(asif);
                    
                }
                currentLineNumber++;
            }

            return accountStatementImportFiles;

        }

        private string GetLabelOperationCopy(string label)
        {
            string labelOperation = label.ToUpper();
            //PATCH: Nouveau format fichier BPVF, on applique le changement sur l'ancien format
            //si "CARTE" est premier mot rencontré --> on le remplace par "" et on met CB**** apres la date
            if (labelOperation.IndexOf("CARTE")==0)
            {
                labelOperation = labelOperation.Substring(6);
                labelOperation = labelOperation.Trim();
                //On recherche la date
                string date = labelOperation.Substring(0, 6);
                //on remplace "CB*" par "CB****" ou "SC*" par "CB****"
                labelOperation = labelOperation.Replace("CB*", "CB****");
                labelOperation = labelOperation.Replace("SC*", "CB****");
            }

            return labelOperation;

        }

        private DateTime? GetDateOperationByFileLabel(string operationLabelWork, EnumOperationMethod enumOperationMethod)
        {
            string dateOperation;
            int index = -1;
            switch (enumOperationMethod)
            {
                case EnumOperationMethod.PaiementCarte:
                    //////commence apres 'CARTE' prendre les 6 caractères suivants (date de longueur 6 au format ddMMyy)
                    ////index = operationLabelWork.IndexOf("CARTE") + "CARTE".Length;
                    ////dateOperation = operationLabelWork.Substring(index, 6);
                    //Date est situé sur les 6 premiers caractères
                    dateOperation = operationLabelWork.Substring(0, 6);
                    return DateTime.ParseExact(dateOperation, "ddMMyy", CultureInfo.CurrentCulture);

                case EnumOperationMethod.RetraitCarte:
                    //commence apres RETRAITDU, prendre les 6 caracteres suivants (date de longueur 6 au format ddMMyy)
                    index = operationLabelWork.IndexOf("RETRAITDU");
                    if (index > -1)
                    {
                        index = index + "RETRAITDU".Length;
                        dateOperation = operationLabelWork.Substring(index, 6);
                        return DateTime.ParseExact(dateOperation, "ddMMyy", CultureInfo.CurrentCulture);
                    }
                    return null;

            }

            return null; ;
        }

        protected override OperationInformation GetOperationInformationByParsingLabel(int idUserGroup, string label,string labelWork, OperationMethod operationMethod)
        {
            switch (operationMethod.Id)
            {
                case (int)EnumOperationMethod.PaiementCarte:
                    return GetOperationInformationForCardPayment(idUserGroup, label, labelWork, operationMethod.KeywordWork);
                case (int)EnumOperationMethod.RetraitCarte:
                    return GetOperationInformationForCashWithdrawal(idUserGroup, label, labelWork, operationMethod.KeywordWork);
                case (int)EnumOperationMethod.Cotisation:
                    return GetOperationInformationForCotisation(label, labelWork, operationMethod.KeywordWork);
                case (int)EnumOperationMethod.Virement:
                    return GetOperationInformationForVirement(label, labelWork, operationMethod.KeywordWork);
                case (int)EnumOperationMethod.RemiseCheque:
                    return GetOperationInformationForRemiseCheque(label, labelWork, operationMethod.KeywordWork);
                case (int)EnumOperationMethod.EmissionCheque:
                    return GetOperationInformationForEmissionCheque(label, labelWork, operationMethod.KeywordWork);
                case (int)EnumOperationMethod.Prelevement:
                    return GetOperationInformationForPrelevement(label, labelWork, operationMethod.KeywordWork);
                case (int)EnumOperationMethod.Frais:
                    return GetOperationInformationForFrais(label, labelWork, operationMethod.KeywordWork);
            }
            return null;
        }

        protected override OperationInformation GetOperationInformationForCardPayment(int idUserGroup, string label, string labelWork, string operationMethodKeyword)
        {
            string operationLabel = string.Empty;
            string operationPlace = string.Empty;

            string fileLabelTmp = labelWork;
            //Rechercher mot clef 'DONT FRAIS' et si present Enlever tout apres 'DONT FRAIS'
            int pos = fileLabelTmp.IndexOf("DONTFRAIS");
            if (pos != -1)
            {
                fileLabelTmp = fileLabelTmp.Substring(0, pos);
                fileLabelTmp = fileLabelTmp.Trim();
            }

            //Recherche du debut du label par le mot cle: CB****
            pos = fileLabelTmp.IndexOf("CB****");

            fileLabelTmp = fileLabelTmp.Substring(pos + "CB****".Length);

            //retrait des chiffres situé apres CB ou SC
            for (int i = 0; i < fileLabelTmp.Length; i++)
            {
                char c = Convert.ToChar(fileLabelTmp.Substring(i, 1));
                if (!Char.IsNumber(c))
                {
                    fileLabelTmp = fileLabelTmp.Substring(i);
                    break;
                }
            }

            //Arret du label dès le 1er chiffre
            int indexPlace = -1;
            for (int i = 0; i < fileLabelTmp.Length; i++)
            {
                char c = Convert.ToChar(fileLabelTmp.Substring(i, 1));
                if (Char.IsNumber(c))
                {
                    operationLabel = fileLabelTmp.Substring(0, i);
                    indexPlace = i;
                    break;
                }
            }

            if (indexPlace == -1)
            {
                operationLabel = fileLabelTmp;
            }
            else
            {
                //determination du lieu à partir de l'indexPlace
                operationPlace = fileLabelTmp.Substring(indexPlace);
                //suppression des chiffres si > 2
                var countNumber = operationPlace.Count(Char.IsDigit);
                operationPlace = countNumber > 2 ? FileHelper.ExcludeNumbers(operationPlace) : operationPlace;
            }

            OperationInformation operationInformation = new OperationInformation
            {
                OperationLabel = FileHelper.GetOperationLabelFromOperationLabelWork(label, operationLabel),
                OperationKeyword = operationLabel, //FileHelper.ExcludeForbiddenChars(operationLabel.Replace(" ", "").ToUpper()),
                PlaceLabel = FileHelper.GetOperationLabelFromOperationLabelWork(label,operationPlace),
                PlaceKeyword = FileHelper.ExcludeNumbers(operationPlace)
            };

            return operationInformation;
        }

        protected override OperationInformation GetOperationInformationForCashWithdrawal(int idUser, string label, string labelWork, string operationMethodKeyword)
        {
            //  Le lieu est du debut jusqu'au mot clef
            //  lieu est a mettre dans place
            var index = labelWork.IndexOf(operationMethodKeyword);
            var operationPlace = labelWork.Substring(0, index);

            OperationInformation operationInformation = new OperationInformation
            {
                OperationLabel = "RETRAIT DAB",
                OperationKeyword = operationMethodKeyword,
                PlaceLabel = FileHelper.GetOperationLabelFromOperationLabelWork(label, operationPlace),
                PlaceKeyword = FileHelper.ExcludeNumbers(operationPlace)
            };

            return operationInformation;
        }

        protected override OperationInformation GetOperationInformationForCotisation(string label, string labelWork, string operationMethodKeyword)
        {
            //rechercher libellé apres mot clef cotisation
            var index = labelWork.IndexOf(operationMethodKeyword) + operationMethodKeyword.Length;
            string operationLabel = labelWork.Substring(index);

            //Arret du label dès le 1er chiffre
            int indexPlace = -1;
            for (int i = 0; i < operationLabel.Length; i++)
            {
                char c = Convert.ToChar(operationLabel.Substring(i, 1));
                if (Char.IsNumber(c))
                {
                    operationLabel = operationLabel.Substring(0, i);
                    indexPlace = i;
                    break;
                }
            }

            OperationInformation operationInformation = new OperationInformation
            {
                OperationLabel = FileHelper.GetOperationLabelFromOperationLabelWork(label, operationLabel),
                OperationKeyword = operationLabel
            };

            return operationInformation;
        }

        protected override OperationInformation GetOperationInformationForVirement(string label, string labelWork, string operationMethodKeyword)
        {
            //rechercher libellé apres mot clef virement
            var index = labelWork.IndexOf(operationMethodKeyword);
            string operationLabel = labelWork.Substring(index + operationMethodKeyword.Length);

            //fin du label est au 1er chiffre trouvé
            for (int i = 0; i < operationLabel.Length; i++)
            {
                char c = Convert.ToChar(operationLabel.Substring(i, 1));
                if (Char.IsNumber(c))
                {
                    operationLabel = operationLabel.Substring(0, i);
                    break;
                }
            }

            OperationInformation operationInformation = new OperationInformation
            {

                OperationLabel = FileHelper.GetOperationLabelFromOperationLabelWork(label, operationLabel),
                OperationKeyword  = $"{operationMethodKeyword}{operationLabel}"
            };

            return operationInformation;
        }

        protected override OperationInformation GetOperationInformationForRemiseCheque(string label, string labelWork, string operationMethodKeyword)
        {
            OperationInformation operationInformation = new OperationInformation
            {
                OperationLabel = "REMISE CHEQUE",
                OperationKeyword = operationMethodKeyword
            };
            return operationInformation;
        }

        protected override OperationInformation GetOperationInformationForEmissionCheque(string label, string labelWork, string operationMethodKeyword)
        {
            OperationInformation operationInformation = new OperationInformation
            {
                OperationLabel = "EMISSION CHEQUE",
                OperationKeyword = operationMethodKeyword
            };
            return operationInformation;
        }

        protected override OperationInformation GetOperationInformationForPrelevement(string label, string labelWork, string operationMethodKeyword)
        {
            //rechercher libellé apres mot clef prelevement
            var index = labelWork.IndexOf(operationMethodKeyword);
            string operationLabel = labelWork.Substring(index + operationMethodKeyword.Length);

            //fin du label est au 1er chiffre trouvé
            for (int i = 0; i < operationLabel.Length; i++)
            {
                char c = Convert.ToChar(operationLabel.Substring(i, 1));
                if (Char.IsNumber(c))
                {
                    operationLabel = operationLabel.Substring(0, i);
                    break;
                }
            }

            OperationInformation operationInformation = new OperationInformation
            {
                OperationLabel = FileHelper.GetOperationLabelFromOperationLabelWork(label, operationLabel),
                OperationKeyword = $"{operationMethodKeyword}{operationLabel}"
            };

            return operationInformation;
        }

        protected override OperationInformation GetOperationInformationForFrais(string label, string labelWork, string operationMethodKeyword)
        {
            //rechercher libellé apres mot clef frais
            int index = labelWork.IndexOf(operationMethodKeyword) + operationMethodKeyword.Length;
            string operationLabel = labelWork.Substring(index);
            operationLabel = operationLabel.Trim();

            //Arret du label dès le 1er chiffre
            int indexPlace = -1;
            for (int i = 0; i < operationLabel.Length; i++)
            {
                char c = Convert.ToChar(operationLabel.Substring(i, 1));
                if (Char.IsNumber(c))
                {
                    operationLabel = operationLabel.Substring(0, i);
                    indexPlace = i;
                    break;
                }
            }

            OperationInformation operationInformation = new OperationInformation
            {
                OperationLabel = FileHelper.GetOperationLabelFromOperationLabelWork(label, operationLabel),
                OperationKeyword = $"{operationMethodKeyword}{operationLabel}"
            };

            return operationInformation;
        }
    }

}
