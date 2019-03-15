using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.SERVICE._Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class OperationDetailService : IOperationDetailService
    {
        private readonly IOperationDetailRepository _operationDetailRepository;

        public OperationDetailService(
            IOperationDetailRepository operationDetailRepository
            )
        {
            _operationDetailRepository = operationDetailRepository;
        }



        public OperationDetail GetForAddressById(int id)
        {
            return _operationDetailRepository.GetForAddressById(id);
        }

        public OperationDetail GetByIdOperation(int idOperation)
        {
            return _operationDetailRepository.GetByIdOperation(idOperation);
        }

        /// <summary>
        /// trouver l'operation à partir du keyword pour les operations non localisables
        /// </summary>
        /// <param name="operationLabel"></param>
        /// <param name="idOperationMethod"></param>
        /// <param name="idMovement"></param>
        /// <returns></returns>
        public OperationDetail GetByKeywordOperation(string operationLabel, int idOperationMethod, EnumMovement enumMovement)
        {
            //retrouver l'operation par le keyword d'operation
            List<OperationDetail> operationDetails = _operationDetailRepository.GetAllByIdOperationMethod(idOperationMethod);

            operationDetails = operationDetails.Where(x => operationLabel.Contains(x.KeywordOperation)).ToList();
            var lenght = operationDetails.Max(x => x.KeywordOperation);
            operationDetails = operationDetails.Where(x => x.KeywordOperation == lenght).ToList();

            switch (operationDetails.Count)
            {
                case 0:
                    return null;
                case 1:
                    return operationDetails[0];
                default:
                    throw new Exception("2 keywords identiques présents pour les operations non localisables");
            }

        }



        public OperationDetail GetByOperationDetail(OperationDetail operationDetail)
        {
            return _operationDetailRepository.GetByOperationDetail(operationDetail);
        }

        /// <summary>
        /// trouver l'operation à partir des keywords operation et place pour les operations localisables
        /// </summary>
        /// <param name="operationLabel"></param>
        /// <param name="idOperationMethod"></param>
        /// <param name="idMovement"></param>
        /// <returns></returns>
        public OperationDetail GetByKeywords(string operationLabel, int idOperationMethod, EnumMovement enumMovement)
        {
            //retrouver l'operation par le keyword d'operation
            List<OperationDetail> operationDetails = _operationDetailRepository.GetAllByIdOperationMethod(idOperationMethod);

            operationDetails = operationDetails
                    .Where(x => operationLabel.Contains(x.KeywordOperation))
                    .Where(x =>x.KeywordPlace != null 
                        && (operationLabel.Contains(x.KeywordPlace) 
                        || x.KeywordPlace=="--INTERNET--" 
                        || x.KeywordPlace== "-TOREPLACE-"))
                    .ToList();

            switch (operationDetails.Count)
            {
                case 0:
                    return null;
                case 1:
                    return operationDetails[0];
                default:
                    throw new Exception("2 paires de keywords identiques présents pour les operations localisables");
            }
        }

        public OperationDetail FindKeywordPlace(string operationLabel)
        {
            return _operationDetailRepository.FindKeywordPlace(operationLabel);
        }

        public KeyLabel GetKeywordPlaceByParsingLabel(AccountStatementImportFile accountStatementImportFile)
        {
            switch (accountStatementImportFile.OperationMethod.Id)
            {
                case (int)EnumOperationMethod.PaiementCarte:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBankFamily.BanquePopulaire:
                            return GetKeywordPlaceForCardPaymentBpvf(accountStatementImportFile);

                    }
                    break;
                case (int)EnumOperationMethod.RetraitCarte:
                    switch (accountStatementImportFile.Account.IdBank)
                    {
                        case (int)EnumBankFamily.BanquePopulaire:
                            return GetKeywordPlaceForCashWithdrawal(accountStatementImportFile);

                    }
                    break;
            }
            return null;
        }

        private KeyLabel GetKeywordPlaceForCardPaymentBpvf(AccountStatementImportFile accountStatementImportFile)
        {
            string label = accountStatementImportFile.LabelOperationWork;
            //pas prendre en compte si contient:
            if (label.Contains("1EURO=1.000000"))
                return null;

            int? pos = null;
            int numberSideBySide = 0;
            //recherche par la fin a partir de lavant derniere lettre du label 2 chiffres a suivre / masque: 56BRANDIVY
            for (int i = label.Length - 2; i > 0; i--)
            {
                char c = Convert.ToChar(label.Substring(i, 1));
                if (Char.IsNumber(c))
                {
                    numberSideBySide++;
                }
                else if (Char.IsLetter(c) || c == ' ')
                {
                    if (numberSideBySide == 2)
                    {
                        pos = i + 1;
                        break;
                    }
                    numberSideBySide = 0;
                }
            }

            KeyLabel keyLabel = new KeyLabel();
            if (pos != null)
            {
                //OperationPlace operationPlace = new OperationPlace();
                //operationPlace.Id = (int)EnumOperation.Inconnu;
                string city = string.Empty;
                city = label.Substring((int)pos + 2);
                int indexOfFirstNumber = city.IndexOfAny("0123456789".ToCharArray());
                city = indexOfFirstNumber > 0 ? city.Substring(0, indexOfFirstNumber) : city;
                //operationPlace.City = city.Trim();
                int department;
                if (int.TryParse(label.Substring((int)pos, 2), out department))
                {
                    keyLabel.Keyword = department.ToString() + city.Replace(" ", "");
                    keyLabel.Label = string.Format("{0} {1}", department.ToString(), city);
                }
            }
            return keyLabel;
        }

        private KeyLabel GetKeywordPlaceForCashWithdrawal(AccountStatementImportFile accountStatementImportFile)
        {
            //chercher position du mot clef
            int pos = accountStatementImportFile.LabelOperationWork.IndexOf(accountStatementImportFile.OperationMethod.KeywordWork);
            //lieu et departement situé avant mot clef
            string city = accountStatementImportFile.LabelOperationWork.Substring(0, pos);
            city = city.Replace(" ", "");
            //KeyLabel keyLabel = GetKeyLabel(city);

            KeyLabel keyLabel = new KeyLabel
            {
                Keyword = city,
                Label = city
            };
            //if (operationPlace == null)
            //{
            //    operationPlace = new OperationPlace();
            //    operationPlace.Id = (int)EnumOperation.Inconnu;
            //    operationPlace.City = city;
            //    return operationPlace;
            //}

            return keyLabel;
        }

        private OperationDetail Create(OperationDetail operationDetail)
        {
            //Recherche si les mots clefs existent déjà pour une autre operation
            if(HasSameKeywords(operationDetail))
            {
                if (operationDetail.KeywordPlace!=null)
                {
                    throw new Exception($"La paire de mot clef: {operationDetail.KeywordOperation}/{operationDetail.KeywordPlace} existe déjà pour une autre opération");
                }
                else
                {
                    throw new Exception($"Le mot clef: {operationDetail.KeywordOperation} existe déjà pour une autre opération");
                }
            }

            return _operationDetailRepository.Create(operationDetail);

        }

        private bool HasSameKeywords(OperationDetail operationDetail)
        {
            return _operationDetailRepository.HasSameKeywords(operationDetail);
        }

        public OperationDetail GetOrCreate(OperationDetail operationDetail)
        {
            //recherche de l'operation detail
            var operationDetailDuplicate = _operationDetailRepository.GetByOperationDetail(operationDetail);
            if (operationDetailDuplicate != null)
                return operationDetailDuplicate;

            operationDetail.KeywordOperation = FileHelper.ExcludeForbiddenChars(operationDetail.KeywordOperation.ToUpper());
            operationDetail.KeywordPlace = operationDetail.KeywordPlace!=null ? operationDetail.KeywordPlace.ToUpper() : null;
            operationDetail = Create(operationDetail);

            return operationDetail;

        }
        //private KeyLabel GetKeyLabel(string city)
        //{
        //    List<OperationPlace> operationPlaces = GetAllWithKeyword();
        //    OperationPlace operationPlace = new OperationPlace();

        //    foreach (OperationPlace opPlace in operationPlaces)
        //    {
        //        if (city.Contains(opPlace.City))
        //        {
        //            return opPlace;
        //        }
        //    }
        //    return null;

        //}
        //public OperationDetail GetByFileLabel(string fileLabel)
        //{
        //    List<OperationDetail> OperationDetails = GetAllWithKeywordPlace();
        //    OperationDetail operationPlace = new OperationDetail();

        //    foreach (OperationDetail opdetail in OperationDetails)
        //    {
        //        if (fileLabel.Contains(opdetail.KeywordPlace))
        //        {
        //            return opdetail;
        //        }
        //    }

        //    return _operationDetailRepository.GetById(1);
        //}

        //private List<OperationPlace> GetAllWithKeywordPlace()
        //{
        //    return _operationDetailRepository.GetAllWithKeywordPlace();
        //}
    }

}
