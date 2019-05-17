using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class MovementService : IMovementService
    {
        private readonly IMapper _mapper;
        private readonly IMovementRepository _movementRepository;
        private readonly ISelectService _selectService;

        public MovementService(
            IMovementRepository movementRepository,
            ISelectService selectService,
            IMapper mapper
            )
        {
            _movementRepository = movementRepository;
            _selectService = selectService;
            _mapper = mapper;
        }

        public List<SelectDto> GetSelectList(EnumSelectType enumSelectType)
        {
            //var selectList = _selectService.GetSelectList(enumSelectType);
            List<SelectDto> selectList = new List<SelectDto>();
            var movements = _movementRepository.GetAllOrdering();
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(movements).ToList());

            return selectList;
        }

    }

}
