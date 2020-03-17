﻿using AutoMapper;
using Budget.DATA.Repositories;
using Budget.DATA.Repositories.ContextTransaction;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Filter;
using Microsoft.AspNetCore.Hosting;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Budget.SERVICE
{
    public class OperationTypeFamilyService : IOperationTypeFamilyService
    {
        private readonly IOperationTypeFamilyRepository _operationTypeFamilyRepository;
        private readonly ISelectService _selectService;
        private readonly IMapper _mapper;
        private readonly IMovementService _movementService;
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IContextTransaction _contextTransaction;
        private readonly IMailService _mailService;
        private readonly IBusinessExceptionMessageService _businessExceptionMessageService;
        private readonly IAccountStatementCheckReferentialService _accountStatementCheckReferentialService;
        private readonly IUserCheckReferentialService _userCheckReferentialService;
        private readonly IUserService _userService;

        public OperationTypeFamilyService(
            IOperationTypeFamilyRepository operationTypeFamilyRepository,
            ISelectService selectService,
            IMovementService movementService,
            IMapper mapper,
            IHostingEnvironment hostingEnvironment,
            IContextTransaction contextTransaction,
            IMailService mailService,
            IBusinessExceptionMessageService businessExceptionMessageService,
            IAccountStatementCheckReferentialService accountStatementCheckReferentialService,
            IUserCheckReferentialService userCheckReferentialService,
            IUserService userService
            //IOperationTypeService operationTypeService
            )
        {
            _operationTypeFamilyRepository = operationTypeFamilyRepository;
            _selectService = selectService;
            _mapper = mapper;
            _movementService = movementService;
            _hostingEnvironment = hostingEnvironment;
            _contextTransaction = contextTransaction;
            _mailService = mailService;
            _businessExceptionMessageService = businessExceptionMessageService;
            _accountStatementCheckReferentialService = accountStatementCheckReferentialService;
            _userCheckReferentialService = userCheckReferentialService;
            _userService = userService;
        }

        //public OperationTypeFamily GetById(int idOperationTypeFamily)
        //{
        //    return _operationTypeFamilyRepository.GetById(idOperationTypeFamily);
        //}
               

        public List<Select> GetSelectList(int idUserGroup, EnumMovement enumMovement, EnumSelectType enumSelectType)
        {
            List<Select> selectList = new List<Select>();
            if (enumSelectType == EnumSelectType.Inconnu)
            {
                var select = _mapper.Map<Select>(GetByCodeUserGroupForSelect(EnumCodeOtf.INCO, idUserGroup));
                selectList.Add(select);
            }
            else
            {
                selectList = _selectService.GetSelectList(enumSelectType);
            }

            //var selectList = _selectService.GetSelectList(EnumTableRef.OperationTypeFamily, idUserGroup,  enumSelectType);
            var operationTypeFamilies = _operationTypeFamilyRepository.GetByIdMovement(idUserGroup, enumMovement);
            selectList.AddRange(_mapper.Map<IEnumerable<Select>>(operationTypeFamilies).ToList());

            return selectList;
        }

        public List<Select> GetSelectList(int idUserGroup, EnumSelectType enumSelectType)
        {
            List<Select> selectList=new List<Select>();
            if (enumSelectType== EnumSelectType.Inconnu)
            {
                var select = _mapper.Map<Select>(GetByCodeUserGroupForSelect(EnumCodeOtf.INCO,idUserGroup));
                selectList.Add(select);
            }
            else
            {
                selectList = _selectService.GetSelectList(enumSelectType);
            }
            
            var operationTypeFamilies = _operationTypeFamilyRepository.GetByIdUserGroup(idUserGroup);
            selectList.AddRange(_mapper.Map<IEnumerable<Select>>(operationTypeFamilies).ToList());

            return selectList;
        }

        public List<SelectGroupDto> GetSelectGroup(int idUserGroup)
        {
            var operationTypeFamilies = _operationTypeFamilyRepository.GetAllByOrder(idUserGroup);
            var twoWays = operationTypeFamilies.Where(x => x.IdMovement == (int)EnumMovement.TwoWays).ToList();
            var credit = operationTypeFamilies.Where(x => x.IdMovement == (int)EnumMovement.Credit).ToList();
            credit.AddRange(twoWays);
            var debit = operationTypeFamilies.Where(x => x.IdMovement == (int)EnumMovement.Debit).ToList();
            debit.AddRange(twoWays);
            List<SelectGroupDto> selectGroups = new List<SelectGroupDto>();
            selectGroups.Add(GetSelectGroup(credit, "Crédit"));
            selectGroups.Add(GetSelectGroup(debit, "Débit"));

            return selectGroups;
        }

        public List<SelectGroupDto> GetSelectGroupListByIdPoste(int idUserGroup, int idPoste)
        {
            EnumMovement enumMovement = idPoste == (int)EnumMovement.Credit ? EnumMovement.Credit : EnumMovement.Debit;

            List<OperationTypeFamily> operationTypeFamilies = _operationTypeFamilyRepository.GetByIdMovement(idUserGroup, enumMovement);

            return GetSelectGroupList(operationTypeFamilies, enumMovement);

        }

        public List<Select> GetSelectListByIdList(List<int> idList)
        {
            List<OperationTypeFamily> operationTypeFamilies = _operationTypeFamilyRepository.GetByIdList(idList);
            return _mapper.Map<List<Select>>(operationTypeFamilies);
        }

        private SelectGroupDto GetSelectGroup(List<OperationTypeFamily> operationTypeFamilies, string label)
        {
            SelectGroupDto selectGroupDto = new SelectGroupDto
            {
                Id = operationTypeFamilies[0].Id,
                Label = label,
                Selects = _mapper.Map<List<Select>>(operationTypeFamilies)
            };

            return selectGroupDto;
        }

        private List<SelectGroupDto> GetSelectGroupList(List<OperationTypeFamily> operationTypeFamilies, EnumMovement enumMovement)
        {
            List<SelectGroupDto> results = new List<SelectGroupDto>();

            SelectGroupDto selectGroup = new SelectGroupDto { Id = (int)enumMovement, Label = enumMovement.ToString() };
            foreach (var operationTypeFamily in operationTypeFamilies)
            {
                Select selectDto = new Select { Id = operationTypeFamily.Id, Label = operationTypeFamily.Label };
                selectGroup.Selects.Add(selectDto);
            }
            results.Add(selectGroup);

            return results;
        }

        public List<Select> GetByIdUserGroup(int idUserGroup)
        {
            List<OperationTypeFamily> operationTypeFamilies = _operationTypeFamilyRepository.GetByIdUserGroup(idUserGroup);
            return _mapper.Map<List<Select>>(operationTypeFamilies);
        }

        public PagedList<OtfForTableDto> GetForTable(FilterOtfTableSelected filter)
        {
            var pagedList = _operationTypeFamilyRepository.GetForTable(filter);
            var result = new PagedList<OtfForTableDto>(_mapper.Map<List<OtfForTableDto>>(pagedList.Datas), pagedList.Pagination);

            foreach(var data in result.Datas)
            {
                OperationTypeFamily otf = _mapper.Map<OperationTypeFamily>(data);
                data.IsUsed = CheckForDelete(otf).Count() > 0 ? true : false;
            }

            return result;
        }

        public OtfForDetail GetForDetail(int? idOtf, int idUser)
        {
            var userForGroup = _userService.GetForUserGroup(idUser);
            OtfForDetail otfForDetail = !idOtf.HasValue ? GetForCreate() : GetById(idOtf.Value);
            otfForDetail.User = _mapper.Map<UserForGroupDto>(userForGroup);

            return otfForDetail;

            ////_mailService.SendMailAsync();

            //OperationTypeFamily otf = new OperationTypeFamily();
            //if (idOperationTypeFamily == -1)
            //{
            //    otf.Movement = new Movement { Id = 1, Label = "Crédit" };
            //    otf.LogoClassName = "OtfInconnu";
            //}
            //else
            //{
            //    otf = _operationTypeFamilyRepository.GetOtfDetail(idOperationTypeFamily);
            //}
            //var otfDto = _mapper.Map<OtfForDetail>(otf);

            //otfDto.Movement = new ComboSimple<SelectDto>
            //{
            //    List = _movementService.GetSelectList(EnumSelectType.Empty),
            //    Selected = new SelectDto { Id = otf.Movement.Id, Label = otf.Movement.Label }
            //};

            //var logoList = GetOtfLogoList();
            //otfDto.LogoClassName = new ComboSimple<SelectDto>
            //{
            //    List = logoList,
            //    Selected = new SelectDto { Id = logoList.Where(x => x.Label == otf.LogoClassName).FirstOrDefault().Id, Label = otf.LogoClassName }
            //};

            //return otfDto;

        }

        private OtfForDetail GetForCreate()
        {
            OtfForDetail otfForDetail = new OtfForDetail
            {
                IsMandatory = false,
                Asset= null,
                Movement= null
            };

            return otfForDetail;
        }

        public OtfForDetail GetById(int idOtf)
        {
            OperationTypeFamily otf = _operationTypeFamilyRepository.GetForDetail(idOtf);
            var result = _mapper.Map<OtfForDetail>(otf);

            return result;
        }

        public Select GetByCodeUserGroupForSelect(EnumCodeOtf enumCodeOtf, int idUserGroup)
        {
            var operationTypeFamily = _operationTypeFamilyRepository.GetByCodeUserGroup(enumCodeOtf, idUserGroup);
            return _mapper.Map<Select>(operationTypeFamily);
        }

        //public SelectDto GetUnknown(int idUserGroup)
        //{
        //    var operationTypeFamily = _operationTypeFamilyRepository.GetUnknown(idUserGroup);
        //    return _mapper.Map<SelectDto>(operationTypeFamily);
        //}

        private List<Select> GetOtfLogoList()
        {
            List<Select> logoList = new List<Select>();
            var basePath = _hostingEnvironment.WebRootPath;
            var files = Directory.EnumerateFiles($"{basePath}/assets/images/Otf");
            int i = 0;
            foreach (var file in files)
            {
                string fileName = Path.GetFileName(file);
                if(fileName.Contains("_32"))
                {
                    var logo = new Select
                    {
                        Id = i,
                        Label = fileName.Replace("_32.png",string.Empty)
                    };
                    logoList.Add(logo);
                    i++;
                }
            }
            //var toto = Directory.GetFiles("/assets/images/Otf");
            return logoList;
        }

        public OtfForDetail Save(OtfForDetail otfForDetail)
        {
            var otf = _mapper.Map<OperationTypeFamily>(otfForDetail);
            if (otf.Id != 0)
            {
                _operationTypeFamilyRepository.Update(otf);
            }
            else
            {
                otf = _operationTypeFamilyRepository.Create(otf);
            }

            return _mapper.Map<OtfForDetail>(otf); ;
        }

        public void DeleteList(List<int> idOtfList, int idUserGroup)
        {
            CheckForDeleteList(idOtfList);
            foreach (var idOperation in idOtfList)
            {
                Delete(idOperation);
            }
        }

        private void CheckForDeleteList(List<int> idOtfList)
        {
            List<BusinessExceptionMessage> businessExceptionMessages = new List<BusinessExceptionMessage>();
            foreach (var idOtf in idOtfList)
            {
                var otf = _operationTypeFamilyRepository.GetById(idOtf);
                businessExceptionMessages.AddRange(CheckForDelete(otf));
            }

            if (businessExceptionMessages.Count() > 0)
            {
                throw new BusinessException(businessExceptionMessages);
            }
        }

        private void Delete(OperationTypeFamily otf)
        {
            _operationTypeFamilyRepository.Delete(otf);
        }

        private bool Delete(int idOtf)
        {
            var otf = _operationTypeFamilyRepository.GetById(idOtf);

            _operationTypeFamilyRepository.Delete(otf);

            return true;
        }

        private List<BusinessExceptionMessage> CheckForDelete(OperationTypeFamily otf)
        {
            List<BusinessExceptionMessage> businessExceptionMessages = new List<BusinessExceptionMessage>();
            //Recherche si operation est mandatory
            if (otf.IsMandatory)
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OTF_ERR_000));

            //Recherche si operation utilisée dans account statement file
            if (_accountStatementCheckReferentialService.AsifHasOtf(otf.Id))
            {
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OTF_ERR_001));
            }

            //Recherche si operation utilisé dans account statement
            if (_accountStatementCheckReferentialService.AsHasOtf(otf.Id))
            {
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OTF_ERR_002));
            }

            //Recherche si operation utilisé dans type operation
            if (_userCheckReferentialService.HasOtf(otf.Id))
            {
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OTF_ERR_003));
            }

            //Recherche si operation utilisé dans User account
            if (_userCheckReferentialService.HasOtf(otf.Id))
            {
                businessExceptionMessages.Add(_businessExceptionMessageService.Get(EnumBusinessException.BUS_OTF_ERR_004));
            }

            return businessExceptionMessages;
        }

    }
}
