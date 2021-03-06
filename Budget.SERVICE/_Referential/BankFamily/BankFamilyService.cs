﻿using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Budget.SERVICE
{
    public class BankFamilyService : IBankFamilyService
    {
        private readonly IMapper _mapper;
        private readonly IBankFamilyRepository _bankFamilyRepository;
        private readonly ISelectService _selectService;

        public BankFamilyService(
            IBankFamilyRepository bankFamilyRepository,
            ISelectService selectService,
            IMapper mapper
            )
        {
            _bankFamilyRepository = bankFamilyRepository;
            _selectService = selectService;
            _mapper = mapper;
        }


        public List<SelectDto> GetSelectList(EnumSelectType enumSelectType)
        {
            var selectList = _selectService.GetSelectList(enumSelectType);
            var bankFamilies = _bankFamilyRepository.GetAllOrdering();
            selectList.AddRange(_mapper.Map<IEnumerable<SelectDto>>(bankFamilies).ToList());

            return selectList;
        }

    }

}
