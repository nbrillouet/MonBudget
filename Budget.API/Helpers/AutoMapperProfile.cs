using AutoMapper;
using Budget.API.Dtos;
using Budget.MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserForListDto>()
                //trouver l'age a partir de la date de naissance
                .ForMember(dest => dest.Age, opt =>
                 {
                     opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                 });

            CreateMap<User, UserForDetailedDto>()
                //trouver l'age a partir de la date de naissance
                .ForMember(dest => dest.Age, opt =>
                {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
        }
    }
}
