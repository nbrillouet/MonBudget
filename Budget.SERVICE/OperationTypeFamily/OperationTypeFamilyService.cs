using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class OperationTypeFamilyService : IOperationTypeFamilyService
    {
        private readonly IOperationTypeFamilyRepository _operationTypeFamilyRepository;

        public OperationTypeFamilyService(IOperationTypeFamilyRepository operationTypeFamilyRepository)
        {
            _operationTypeFamilyRepository = operationTypeFamilyRepository;
        }

        public List<GenericList> GetGenericList()
        {
            return _operationTypeFamilyRepository.GetGenericList();
        }

        public OperationTypeFamily GetById(int idOperationTypeFamily)
        {
            return _operationTypeFamilyRepository.GetById(idOperationTypeFamily);
        }

        public List<OperationTypeFamily> GetAllByOrder()
        {
            return _operationTypeFamilyRepository.GetAllByOrder();
        }

        public List<GenericList> GetGenericListByIdMovement(int idMovement, EnumSelect enumSelect)
        {
            return _operationTypeFamilyRepository.GetGenericListByIdMovement(idMovement, enumSelect);
        }

        public List<OperationTypeFamily> GetByIdMovement(int idMovement, EnumSelect enumSelect)
        {
            return _operationTypeFamilyRepository.GetByIdMovement(idMovement, enumSelect);
        }

        public int Create(OperationTypeFamily operationTypeFamily)
        {
            return _operationTypeFamilyRepository.Create(operationTypeFamily);
        }
        public void Update(OperationTypeFamily operationTypeFamily)
        {
            _operationTypeFamilyRepository.Update(operationTypeFamily);
        }

        public void Delete(OperationTypeFamily operationTypeFamily)
        {
            _operationTypeFamilyRepository.Delete(operationTypeFamily);
        }

    }
}
