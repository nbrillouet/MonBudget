//using AutoMapper;
//using Budget.DATA.Repositories;
//using Budget.MODEL;
//using Budget.MODEL.Database;
//using Budget.MODEL.Dto;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;

//namespace Budget.SERVICE
//{
//    public class OperationPlaceService : IOperationPlaceService
//    {
//        private readonly IOperationPlaceRepository _operationPlaceRepository;
//        private readonly ISelectService _selectService;
//        private readonly IMapper _mapper;

//        public OperationPlaceService(
//            IOperationPlaceRepository operationPlaceRepository,
//            ISelectService selectService,
//            IMapper mapper)
//        {
//            _operationPlaceRepository = operationPlaceRepository;
//            _selectService = selectService;
//            _mapper = mapper;
//        }

//        public List<SelectDto> GetSelect(int idSelectType)
//        {
//            var selectList = _selectService.GetSelectList(idSelectType);
//            var operationPlaces = _operationPlaceRepository.GetAllByOrder();

//            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operationPlaces).ToList());

//            return selectList;
//        }









//        public OperationPlace GetById(int id)
//        {
//            return _operationPlaceRepository.GetById(id);
//        }

//        public List<OperationPlace> GetAll()
//        {
//            return _operationPlaceRepository.GetAll();
//        }
//        public int Create(OperationPlace operationPlace)
//        {
//            return _operationPlaceRepository.Create(operationPlace);
//        }
//        public void Update(OperationPlace operationPlace)
//        {
//            _operationPlaceRepository.Update(operationPlace);
//        }
//        public void Delete(OperationPlace operationPlace)
//        {
//            _operationPlaceRepository.Delete(operationPlace);
//        }
//        public List<GenericList> GetGenericList()
//        {
//            return _operationPlaceRepository.GetGenericList();
//        }


//        public List<OperationPlace> GetAllWithKeyword()
//        {
//            return _operationPlaceRepository.GetAllWithKeyWord();
//        }

//        public OperationPlace GetByFileLabel(string fileLabel)
//        {
//            List<OperationPlace> operationPlaces = GetAllWithKeyword();
//            OperationPlace operationPlace = new OperationPlace();

//            foreach (OperationPlace opPlace in operationPlaces)
//            {
//                if (fileLabel.Contains(opPlace.Keyword))
//                {
//                    return opPlace;
//                }
//            }

//            return _operationPlaceRepository.GetById(1);
//        }

//        private OperationPlace GetOperationPlaceByCityLabel(string city)
//        {
//            List<OperationPlace> operationPlaces = GetAllWithKeyword();
//            OperationPlace operationPlace = new OperationPlace();

//            foreach (OperationPlace opPlace in operationPlaces)
//            {
//                if (city.Contains(opPlace.City))
//                {
//                    return opPlace;
//                }
//            }
//            return null;

//        }

//        public OperationPlace GetOperationPlaceByParsingLabel(AccountStatementImportFile accountStatementImportFile)
//        {
//            switch (accountStatementImportFile.OperationMethod.Id)
//            {
//                case (int)EnumOperationMethod.PaiementCarte:
//                    switch (accountStatementImportFile.Account.IdBank)
//                    {
//                        case (int)EnumBank.BPVF:
//                            return GetOperationPlaceForCardPaymentBpvf(accountStatementImportFile);

//                    }
//                    break;
//                case (int)EnumOperationMethod.RetraitCarte:
//                    switch (accountStatementImportFile.Account.IdBank)
//                    {
//                        case (int)EnumBank.BPVF:
//                            return GetOperationPlaceForCashWithdrawal(accountStatementImportFile);

//                    }
//                    break;
//            }
//            return new OperationPlace();
//        }

//        private OperationPlace GetOperationPlaceForCardPaymentBpvf(AccountStatementImportFile accountStatementImportFile)
//        {
//            string label = accountStatementImportFile.LabelOperationWork;
//            //pas prendre en compte si contient:
//            if (label.Contains("1EURO=1.000000"))
//                return null;

//            int? pos = null;
//            int numberSideBySide = 0;
//            //recherche par la fin a partir de lavant derniere lettre du label 2 chiffres a suivre / masque: 56BRANDIVY
//            for (int i = label.Length - 2; i > 0; i--)
//            {
//                char c = Convert.ToChar(label.Substring(i, 1));
//                if (Char.IsNumber(c))
//                {
//                    numberSideBySide++;
//                }
//                else if (Char.IsLetter(c) || c == ' ')
//                {
//                    if (numberSideBySide == 2)
//                    {
//                        pos = i + 1;
//                        break;
//                    }
//                    numberSideBySide = 0;
//                }
//            }

//            if (pos != null)
//            {
//                OperationPlace operationPlace = new OperationPlace();
//                operationPlace.Id = (int)EnumOperation.Inconnu;
//                string city = string.Empty;
//                city = label.Substring((int)pos + 2);
//                int indexOfFirstNumber = city.IndexOfAny("0123456789".ToCharArray());
//                city = indexOfFirstNumber > 0 ? city.Substring(0, indexOfFirstNumber) : city;
//                operationPlace.City = city.Trim();
//                int department;
//                if (int.TryParse(label.Substring((int)pos, 2), out department))
//                {
//                    operationPlace.Department = Convert.ToString(department);
//                    operationPlace.Keyword = department.ToString() + operationPlace.City.Replace(" ", "");
//                }
//                return operationPlace;
//            }
//            return null;
//        }

//        private OperationPlace GetOperationPlaceForCashWithdrawal(AccountStatementImportFile accountStatementImportFile)
//        {
//            //chercher position du mot clef
//            int pos = accountStatementImportFile.LabelOperationWork.IndexOf(accountStatementImportFile.OperationMethod.KeywordWork);
//            //lieu et departement situé avant mot clef
//            string city = accountStatementImportFile.LabelOperationWork.Substring(0, pos);
//            city = city.Replace(" ", "");
//            OperationPlace operationPlace = GetOperationPlaceByCityLabel(city);
//            if (operationPlace == null)
//            {
//                operationPlace = new OperationPlace();
//                operationPlace.Id = (int)EnumOperation.Inconnu;
//                operationPlace.City = city;
//                return operationPlace;
//            }

//            return operationPlace;
//        }
//    }
//}
