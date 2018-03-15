using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace Budget.SERVICE
{
    public class OperationService : IOperationService
    {
        private readonly IOperationRepository _operationRepository;
        private readonly IOperationTypeRepository _operationTypeRepository;
        private readonly IOperationTypeFamilyRepository _operationTypeFamilyRepository;

        public OperationService(IOperationRepository operationRepository, IOperationTypeRepository operationTypeRepository, IOperationTypeFamilyRepository operationTypeFamilyRepository)
        {
            _operationRepository = operationRepository;
            _operationTypeRepository = operationTypeRepository;
            _operationTypeFamilyRepository = operationTypeFamilyRepository;
        }

        public Operation GetById(int idOperation)
        {
            return _operationRepository.GetById(idOperation);
        }
        public List<Operation> GetAllByOrder()
        {
            return _operationRepository.GetAllByOrder();
        }

        public List<GenericList> GetGenericList()
        {
            return _operationRepository.GetGenericList();
        }

        public List<Operation> GetAllByIdOperationMethod(int idOperationMethod)
        {
            return _operationRepository.GetAllByIdOperationMethod(idOperationMethod);
        }

        public List<Operation> GetAllByIdOperationTypeFamily(int idOperationTypeFamily)
        {
            return _operationRepository.GetAllByIdOperationTypeFamily(idOperationTypeFamily);
        }

        public Operation GetOperationByFileLabel(string operationLabel, string reference, EnumBank bankEnum, OperationMethod operationMethod, int idMovement)
        {
            //retrouver l'operation par le keyword d'operation
            List<Operation> operations = _operationRepository.GetAllByIdOperationMethod(operationMethod.Id);

            foreach (Operation operation in operations)
            {
                if (operationLabel.Contains(operation.Keyword))
                {
                    OperationType operationType = _operationTypeRepository.GetById(operation.IdOperationType);
                    OperationTypeFamily operationTypeFamily = _operationTypeFamilyRepository.GetById(operationType.IdOperationTypeFamily);
                    if ((int)idMovement == operationTypeFamily.IdMovement)
                        return operation;
                }
            }
            return null;
        }

        public DateTime? GetDateOperationByFileLabel(string trimOperationLabel, OperationMethod operationMethod)
        {
            string dateOperation;
            switch (operationMethod.Id)
            {
                case (int)EnumOperationMethod.PaiementCarte:
                    dateOperation = trimOperationLabel.Substring(5, 6);
                    return DateTime.ParseExact(dateOperation, "ddMMyy", CultureInfo.CurrentCulture);

            }

            return null;
        }

        public Operation GetOperationByParsingLabel(AccountStatementImportFile accountStatementImportFile)
        {
            //Operation operation = accountStatement.Operation;
            switch (accountStatementImportFile.OperationMethod.Id)
            {
                case (int)EnumOperationMethod.PaiementCarte:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBank.BPVF:
                            return GetOperationForCardPaymentBpvf(accountStatementImportFile);

                    }
                    break;
                case (int)EnumOperationMethod.RetraitCarte:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBank.BPVF:
                            return GetOperationForCashWithdrawal(accountStatementImportFile);
                    }
                    break;
                case (int)EnumOperationMethod.Cotisation:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBank.BPVF:
                            return GetOperationForCotisation(accountStatementImportFile);
                    }
                    break;
                case (int)EnumOperationMethod.Virement:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBank.BPVF:
                            return GetOperationForVirement(accountStatementImportFile);
                    }
                    break;
                case (int)EnumOperationMethod.RemiseCheque:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBank.BPVF:
                            return GetOperationForRemiseCheque(accountStatementImportFile);
                    }
                    break;
                case (int)EnumOperationMethod.EmissionCheque:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBank.BPVF:
                            return GetOperationForEmissionCheque(accountStatementImportFile);
                    }
                    break;
                case (int)EnumOperationMethod.Prelevement:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBank.BPVF:
                            return GetOperationForPrelevement(accountStatementImportFile);
                    }
                    break;
                case (int)EnumOperationMethod.Frais:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBank.BPVF:
                            return GetOperationForFrais(accountStatementImportFile);
                    }
                    break;

            }
            return new Operation();
        }



        private Operation GetOperationForCardPaymentBpvf(AccountStatementImportFile accountStatementImportFile)
        {
            string fileLabelTmp = accountStatementImportFile.LabelOperationWork;
            //Enlever tout apres DONT FRAIS
            int pos = fileLabelTmp.IndexOf("DONT FRAIS");
            if (pos != -1)
            {
                fileLabelTmp = fileLabelTmp.Substring(0, pos - 1);
                fileLabelTmp = fileLabelTmp.Trim();
            }

            //Recherche du debut du label par le mot cle: CB* ou SC*
            pos = fileLabelTmp.IndexOf("CB");
            if (pos == -1)
            {
                pos = fileLabelTmp.IndexOf("SC");
            }
            fileLabelTmp = fileLabelTmp.Substring(pos + 2);
            //fileLabelTmp = fileLabelTmp.Replace("*", "");

            //retrait des chiffres
            for (int i = 0; i < fileLabelTmp.Length; i++)
            {
                char c = Convert.ToChar(fileLabelTmp.Substring(i, 1));
                if (!Char.IsNumber(c))
                {
                    fileLabelTmp = fileLabelTmp.Substring(i + 1);
                    break;
                }

            }
            //Arret du label des le 1er chiffre
            for (int i = 0; i < fileLabelTmp.Length; i++)
            {
                char c = Convert.ToChar(fileLabelTmp.Substring(i, 1));
                if (Char.IsNumber(c))
                {
                    fileLabelTmp = fileLabelTmp.Substring(0, i);
                    break;
                }
            }

            Operation operation = new Operation
            {
                Id = (int)EnumOperation.Inconnu,
                OperationMethod = accountStatementImportFile.OperationMethod,
                IdOperationMethod = (int)accountStatementImportFile.IdOperationMethod,
                Label = fileLabelTmp.Trim(),
                Keyword = fileLabelTmp.Replace(" ", "").ToUpper()
            };

            return operation;
        }

        private Operation GetOperationForCashWithdrawal(AccountStatementImportFile accountStatementImportFile)
        {
            //  Le lieu est du debut jusqu'au mot clef
            //  lieu est a mettre dans place
            //string place = accountStatement.LabelOperationWork.Substring(0, accountStatement.LabelOperationWork.IndexOf(accountStatement.OperationMethod.KeywordWork));
            //place = place.Trim();

            //var operation = new Operation();
            //operation.Label = place;
            //operation.Keyword = place.Replace(" ", "").ToUpper();

            Operation operation = new Operation
            {
                OperationMethod = accountStatementImportFile.OperationMethod,
                IdOperationMethod = (int)accountStatementImportFile.IdOperationMethod,
                Label = "RETRAIT DAB",
                Keyword = null,
                Id = (int)EnumOperation.RetraitDab
            };

            return operation;
        }

        private Operation GetOperationForCotisation(AccountStatementImportFile accountStatementImportFile)
        {
            //rechercher libellé apres mot clef cotisation
            string label = accountStatementImportFile.LabelOperationWork.Substring(accountStatementImportFile.LabelOperationWork.IndexOf(accountStatementImportFile.OperationMethod.KeywordWork) + accountStatementImportFile.OperationMethod.KeywordWork.Length);
            label = label.Trim();
            label = label.Substring(0, label.IndexOf(" "));
            label = label.Trim();

            Operation operation = new Operation
            {
                OperationMethod = accountStatementImportFile.OperationMethod,
                IdOperationMethod = (int)accountStatementImportFile.IdOperationMethod,
                Label = label,
                Keyword = accountStatementImportFile.OperationMethod.KeywordWork.ToUpper() + label.Replace(" ", "").ToUpper()
            };

            return operation;
        }

        private Operation GetOperationForVirement(AccountStatementImportFile accountStatementImportFile)
        {
            //rechercher libellé apres mot clef virement
            string label = accountStatementImportFile.LabelOperationWork.Substring(accountStatementImportFile.LabelOperationWork.IndexOf(accountStatementImportFile.OperationMethod.KeywordWork) + accountStatementImportFile.OperationMethod.KeywordWork.Length);
            label = label.Trim();
            // Label se termine au premier " " rencontré
            label = label.Substring(0, label.IndexOf(" "));
            label = label.Trim();

            Operation operation = new Operation
            {
                OperationMethod = accountStatementImportFile.OperationMethod,
                IdOperationMethod = (int)accountStatementImportFile.IdOperationMethod,
                Label = label,
                Keyword = accountStatementImportFile.OperationMethod.KeywordWork.ToUpper() + label.Replace(" ", "").ToUpper()
            };

            return operation;
        }

        private Operation GetOperationForRemiseCheque(AccountStatementImportFile accountStatementImportFile)
        {
            Operation operation = new Operation
            {
                OperationMethod = accountStatementImportFile.OperationMethod,
                IdOperationMethod = (int)accountStatementImportFile.IdOperationMethod,
                Id = (int)EnumOperation.RemiseCheque,
                Label = "REMISE CHEQUE"
            };
            return operation;
        }

        private Operation GetOperationForEmissionCheque(AccountStatementImportFile accountStatementImportFile)
        {
            Operation operation = new Operation
            {
                OperationMethod = accountStatementImportFile.OperationMethod,
                IdOperationMethod = (int)accountStatementImportFile.IdOperationMethod,
                Id = (int)EnumOperation.RemiseCheque,
                Label = "EMISSION CHEQUE"
            };
            return operation;
        }

        private Operation GetOperationForPrelevement(AccountStatementImportFile accountStatementImportFile)
        {
            //remettre lespace original du mot clef
            if (accountStatementImportFile.OperationMethod.KeywordWork == "PRLVSEPA")
                accountStatementImportFile.OperationMethod.KeywordWork = "PRLV SEPA";
            //rechercher libellé apres mot clef virement
            string label = accountStatementImportFile.LabelOperationWork.Substring(accountStatementImportFile.LabelOperationWork.IndexOf(accountStatementImportFile.OperationMethod.KeywordWork) + accountStatementImportFile.OperationMethod.KeywordWork.Length);
            label = label.Trim();
            //fin du label est au 1er chiffre trouvé
            for (int i = 0; i < label.Length; i++)
            {
                char c = Convert.ToChar(label.Substring(i, 1));
                if (Char.IsNumber(c))
                {
                    label = label.Substring(0, i);
                    break;
                }
            }
            label = label.Trim();

            Operation operation = new Operation
            {
                OperationMethod = accountStatementImportFile.OperationMethod,
                IdOperationMethod = (int)accountStatementImportFile.IdOperationMethod,
                Label = label,
                Keyword = accountStatementImportFile.OperationMethod.KeywordWork.Replace(" ", "").ToUpper() + label.Replace(" ", "").ToUpper()
            };

            return operation;
        }

        private Operation GetOperationForFrais(AccountStatementImportFile accountStatementImportFile)
        {
            //rechercher libellé apres mot clef frais
            string label = accountStatementImportFile.LabelOperationWork.Substring(accountStatementImportFile.LabelOperationWork.IndexOf(accountStatementImportFile.OperationMethod.KeywordWork) + accountStatementImportFile.OperationMethod.KeywordWork.Length);
            label = label.Trim();
            //Label se termine au premier ":" rencontré
            label = label.Substring(0, label.IndexOf(":"));
            label = label.Trim();

            Operation operation = new Operation
            {
                OperationMethod = accountStatementImportFile.OperationMethod,
                IdOperationMethod = (int)accountStatementImportFile.IdOperationMethod,
                Label = label,
                Keyword = accountStatementImportFile.OperationMethod.KeywordWork.ToUpper() + label.Replace(" ", "").ToUpper()
            };

            return operation;
        }


        public int Create(Operation operation)
        {
            return _operationRepository.Create(operation);
        }
        public void Update(Operation operation)
        {
            _operationRepository.Update(operation);
        }

        public void Delete(Operation operation)
        {
            _operationRepository.Delete(operation);
        }
    }
}
