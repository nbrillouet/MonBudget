using AutoMapper;
using Budget.DATA.Repositories;
using Budget.DATA.Repositories.ContextTransaction;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.MODEL.Dto.Select;
using Budget.MODEL.Filter;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;

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

        public OperationTypeFamilyService(
            IOperationTypeFamilyRepository operationTypeFamilyRepository,
            ISelectService selectService,
            IMovementService movementService,
            IMapper mapper,
            IHostingEnvironment hostingEnvironment,
            IContextTransaction contextTransaction,
            IMailService mailService
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
            //_operationTypeService = operationTypeService;
        }

        public OperationTypeFamily GetById(int idOperationTypeFamily)
        {
            return _operationTypeFamilyRepository.GetById(idOperationTypeFamily);
        }
               

        public List<SelectDto> GetSelectList(int idUserGroup, EnumMovement enumMovement, EnumSelectType enumSelectType)
        {
            List<SelectDto> selectList = new List<SelectDto>();
            if (enumSelectType == EnumSelectType.Inconnu)
            {
                var select = _mapper.Map<SelectDto>(GetByCodeUserGroupForSelect(EnumCodeOtf.INCO, idUserGroup));
                selectList.Add(select);
            }
            else
            {
                selectList = _selectService.GetSelectList(enumSelectType);
            }

            //var selectList = _selectService.GetSelectList(EnumTableRef.OperationTypeFamily, idUserGroup,  enumSelectType);
            var operationTypeFamilies = _operationTypeFamilyRepository.GetByIdMovement(idUserGroup, enumMovement);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operationTypeFamilies).ToList());

            return selectList;
        }

        public List<SelectDto> GetSelectList(int idUserGroup, EnumSelectType enumSelectType)
        {
            List<SelectDto> selectList=new List<SelectDto>();
            if (enumSelectType== EnumSelectType.Inconnu)
            {
                var select = _mapper.Map<SelectDto>(GetByCodeUserGroupForSelect(EnumCodeOtf.INCO,idUserGroup));
                selectList.Add(select);
            }
            else
            {
                selectList = _selectService.GetSelectList(enumSelectType);
            }
            
            var operationTypeFamilies = _operationTypeFamilyRepository.GetByIdUserGroup(idUserGroup);
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(operationTypeFamilies).ToList());

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

        public List<SelectDto> GetSelectListByIdList(List<int> idList)
        {
            List<OperationTypeFamily> operationTypeFamilies = _operationTypeFamilyRepository.GetByIdList(idList);
            return _mapper.Map<List<SelectDto>>(operationTypeFamilies);
        }

        private SelectGroupDto GetSelectGroup(List<OperationTypeFamily> operationTypeFamilies, string label)
        {
            SelectGroupDto selectGroupDto = new SelectGroupDto
            {
                Id = operationTypeFamilies[0].Id,
                Label = label,
                Selects = _mapper.Map<List<SelectDto>>(operationTypeFamilies)
            };

            return selectGroupDto;
        }

        private List<SelectGroupDto> GetSelectGroupList(List<OperationTypeFamily> operationTypeFamilies, EnumMovement enumMovement)
        {
            List<SelectGroupDto> results = new List<SelectGroupDto>();

            SelectGroupDto selectGroup = new SelectGroupDto { Id = (int)enumMovement, Label = enumMovement.ToString() };
            foreach (var operationTypeFamily in operationTypeFamilies)
            {
                SelectDto selectDto = new SelectDto { Id = operationTypeFamily.Id, Label = operationTypeFamily.Label };
                selectGroup.Selects.Add(selectDto);
            }
            results.Add(selectGroup);

            return results;
        }

        public List<SelectDto> GetByIdUserGroup(int idUserGroup)
        {
            List<OperationTypeFamily> operationTypeFamilies = _operationTypeFamilyRepository.GetByIdUserGroup(idUserGroup);
            return _mapper.Map<List<SelectDto>>(operationTypeFamilies);
        }

        public PagedList<OtfForTableDto> GetOtfTable(FilterOtfTableSelected filter)
        {
            var pagedList = _operationTypeFamilyRepository.GetOtfTable(filter);
            foreach(var data in pagedList.Datas)
            {
                data.LogoClassName = $"assets\\images\\Otf\\{data.LogoClassName}_32.png";
            }
            var result = new PagedList<OtfForTableDto>(_mapper.Map<List<OtfForTableDto>>(pagedList.Datas), pagedList.Pagination);


            return result;

        }

        public OtfForDetailDto GetOtfDetail(int idOperationTypeFamily)
        {
            //_mailService.SendMailAsync();

            OperationTypeFamily otf = new OperationTypeFamily();
            if (idOperationTypeFamily == -1)
            {
                otf.Movement = new Movement { Id = 1, Label = "Crédit" };
                otf.LogoClassName = "OtfInconnu";
            }
            else
            {
                otf = _operationTypeFamilyRepository.GetOtfDetail(idOperationTypeFamily);
            }
            var otfDto = _mapper.Map<OtfForDetailDto>(otf);

            otfDto.Movement = new ComboSimple<SelectDto>
            {
                List = _movementService.GetSelectList(EnumSelectType.Empty),
                Selected = new SelectDto { Id = otf.Movement.Id, Label = otf.Movement.Label }
            };

            var logoList = GetOtfLogoList();
            otfDto.LogoClassName = new ComboSimple<SelectDto>
            {
                List = logoList,
                Selected = new SelectDto { Id = logoList.Where(x => x.Label == otf.LogoClassName).FirstOrDefault().Id, Label = otf.LogoClassName }
            };

            return otfDto;


        }

        public SelectDto GetByCodeUserGroupForSelect(EnumCodeOtf enumCodeOtf, int idUserGroup)
        {
            var operationTypeFamily = _operationTypeFamilyRepository.GetByCodeUserGroup(enumCodeOtf, idUserGroup);
            return _mapper.Map<SelectDto>(operationTypeFamily);
        }

        //public SelectDto GetUnknown(int idUserGroup)
        //{
        //    var operationTypeFamily = _operationTypeFamilyRepository.GetUnknown(idUserGroup);
        //    return _mapper.Map<SelectDto>(operationTypeFamily);
        //}

        private List<SelectDto> GetOtfLogoList()
        {
            List<SelectDto> logoList = new List<SelectDto>();
            var basePath = _hostingEnvironment.WebRootPath;
            var files = Directory.EnumerateFiles($"{basePath}/assets/images/Otf");
            int i = 0;
            foreach (var file in files)
            {
                string fileName = Path.GetFileName(file);
                if(fileName.Contains("_32"))
                {
                    var logo = new SelectDto
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

        public OtfForDetailDto SaveOtfDetail(OtfForDetailDto otfForDetailDto)
        {
            var otf = _mapper.Map<OperationTypeFamily>(otfForDetailDto);
            if (otf.Id != 0)
            {
                _operationTypeFamilyRepository.Update(otf);
            }
            else
            {
                otf = _operationTypeFamilyRepository.Create(otf);
            }

            return _mapper.Map<OtfForDetailDto>(otf); ;
        }

        public bool DeleteOtfDetail(int idOtf)
        {
            var otf = _operationTypeFamilyRepository.GetById(idOtf);
            if (otf.IsMandatory)
                throw new Exception("Catégorie d'opération obligatoire, suppression impossible");
            _operationTypeFamilyRepository.DeleteWithEscalation(otf);


            return true;
        }



    }
}
