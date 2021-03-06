﻿using AutoMapper;
using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using Budget.MODEL.Dto;
using Budget.SERVICE._Helpers;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Budget.SERVICE
{
    public class OperationDetailService : IOperationDetailService
    {
        private readonly IOperationDetailRepository _operationDetailRepository;
        private readonly IMapper _mapper;

        public OperationDetailService(
            IOperationDetailRepository operationDetailRepository,
            IMapper mapper
            )
        {
            _operationDetailRepository = operationDetailRepository;
            _mapper = mapper;
        }

        public OperationDetail GetOrCreate(OperationDetail operationDetail)
        {
            //recherche de l'operation detail
            var operationDetailDuplicate = _operationDetailRepository.GetByOperationDetail(operationDetail);
            if (operationDetailDuplicate != null)
                return operationDetailDuplicate;

            //Recherche si les mots clefs existent déjà pour une autre operation
            if (HasSameKeywords(operationDetail))
            {
                if (operationDetail.KeywordPlace != null)
                {
                    throw new Exception($"La paire de mot clef: {operationDetail.KeywordOperation}/{operationDetail.KeywordPlace} existe déjà pour une autre opération");
                }
                else
                {
                    throw new Exception($"Le mot clef: {operationDetail.KeywordOperation} existe déjà pour une autre opération");
                }
            }

            operationDetail.KeywordOperation = FileHelper.ExcludeForbiddenChars(operationDetail.KeywordOperation.ToUpper());
            operationDetail.KeywordPlace = operationDetail.KeywordPlace!=null ? operationDetail.KeywordPlace.ToUpper() : null;

            if(operationDetail.Id==0)
                return _operationDetailRepository.Create(operationDetail);
            else
            {
                _operationDetailRepository.Update(operationDetail);
                return operationDetail;
            }

        }

        private bool HasSameKeywords(OperationDetail operationDetail)
        {
            return _operationDetailRepository.HasSameKeywords(operationDetail);
        }

        /// <summary>
        /// trouver l'operation à partir du keyword pour les operations non localisables
        /// </summary>
        /// <param name="operationLabel"></param>
        /// <param name="idOperationMethod"></param>
        /// <param name="idMovement"></param>
        /// <returns></returns>
        public OperationDetail GetByKeywordOperation(int idUserGroup, string operationLabel, int idOperationMethod, EnumMovement enumMovement)
        {
            //retrouver l'operation par le keyword d'operation
            List<OperationDetail> operationDetails = _operationDetailRepository.GetAllByIdOperationMethod(idUserGroup, idOperationMethod);

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

        /// <summary>
        /// trouver l'operation à partir des keywords operation et place pour les operations localisables
        /// </summary>
        /// <param name="operationLabel"></param>
        /// <param name="idOperationMethod"></param>
        /// <param name="idMovement"></param>
        /// <returns></returns>
        public OperationDetail GetByKeywords(int idUserGroup, string operationLabel, int idOperationMethod, EnumMovement enumMovement)
        {
            //retrouver l'operation par le keyword d'operation
            List<OperationDetail> operationDetails = _operationDetailRepository.GetAllByIdOperationMethod(idUserGroup, idOperationMethod);

            operationDetails = operationDetails
                    .Where(x => operationLabel.Contains(x.KeywordOperation))
                    .Where(x => x.KeywordPlace != null
                        && (operationLabel.Contains(x.KeywordPlace)
                        || x.KeywordPlace == "--INTERNET--"
                        || x.KeywordPlace == "-TOREPLACE-"))
                    .ToList();

            switch (operationDetails.Count)
            {
                case 0:
                    return null;
                case 1:
                    return operationDetails[0];
                default:
                    return DetachOperation(operationDetails);
                    //throw new Exception("2 paires de keywords identiques présents pour les operations localisables");
            }
        }

        public OperationDetail FindKeywordPlace(int idUserGroup, string operationLabel)
        {
            return _operationDetailRepository.FindKeywordPlace(idUserGroup, operationLabel);
        }

        public OperationDetail GetUnknown(int idUserGroup)
        {
            var operationDetail = _operationDetailRepository.GetUnknown(idUserGroup);
            return operationDetail;
            //return _mapper.Map<SelectDto>(operationDetail);
        }

        /// <summary>
        /// essai de detacher une operation detail d'une liste en verifiant s'il nexiste pas de doublons
        /// et en ne construisant pas de doublon
        /// </summary>
        /// <param name="operationDetails"></param>
        /// <returns></returns>
        private OperationDetail DetachOperation(List<OperationDetail> operationDetails)
        {
            // selection des operation keyword et operation place grouper
            // si le regroupement ne retourne qu'un seul enregistrement ==> doublon operation keyword et operation place : erreur
            var operations = operationDetails.Select(x => new { operationKeyword = x.KeywordOperation, operationPlace = x.KeywordPlace }).ToList().GroupBy(x => new { x.operationKeyword, x.operationPlace }).ToList();
            if (operations.Count ==1)
            {
                throw new Exception("2 paires de keywords identiques présents pour les operations localisables");
            }
            // sinon prendre le 1er enregistrement trouvé
            else
                return operationDetails[0];

        }

    }

}
