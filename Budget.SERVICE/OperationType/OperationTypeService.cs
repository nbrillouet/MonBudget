using Budget.DATA.Repositories;
using Budget.MODEL;
using Budget.MODEL.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace Budget.SERVICE
{
    public class OperationTypeService : IOperationTypeService
    {
        private readonly IOperationTypeRepository _operationTypeRepository;

        public OperationTypeService(IOperationTypeRepository operationTypeRepository)
        {
            _operationTypeRepository = operationTypeRepository;
        }

        public List<GenericList> GetGenericList()
        {
            return _operationTypeRepository.GetGenericList();
        }
        public List<OperationType> GetAll()
        {
            return _operationTypeRepository.GetAll();
        }
        public OperationType GetById(int idOperationType)
        {
            return _operationTypeRepository.GetById(idOperationType);
        }
        public List<OperationType> GetByIdOperationTypeFamily(int idOperationTypeFamily, EnumSelect enumSelect)
        {
            return _operationTypeRepository.GetByIdOperationTypeFamily(idOperationTypeFamily, enumSelect);
        }
        public List<OperationType> GetByIdMovement(int IdMovement)
        {
            return _operationTypeRepository.GetByIdMovement(IdMovement);
        }
        public List<GenericList> GetGenericListByIdMovement(int IdMovement)
        {
            return _operationTypeRepository.GetGenericListByIdMovement(IdMovement);
        }

        public OperationType GetByIdWithOperationTypeFamily(int idOperationType)
        {
            return _operationTypeRepository.GetByIdWithOperationTypeFamily(idOperationType);
        }

        public List<OperationType> GetAllByOrder(EnumSelect enumSelect)
        {
            return _operationTypeRepository.GetAllByOrder(enumSelect);
        }

        public List<GenericList> GetGenericListByIdOperationTypeFamily(int IdOperationTypeFamily, EnumSelect enumSelect)
        {
            return _operationTypeRepository.GetGenericListByIdOperationTypeFamily(IdOperationTypeFamily, enumSelect);
        }

        public OperationType GetFirstByIdOperationTypeFamily(int idOperationTypeFamily)
        {
            return _operationTypeRepository.GetFirstByIdOperationTypeFamily(idOperationTypeFamily);
        }

        public int Create(OperationType operationType)
        {
            return _operationTypeRepository.Create(operationType);
        }
        public void Update(OperationType operationType)
        {
            _operationTypeRepository.Update(operationType);
        }

        public void Delete(OperationType operationType)
        {
            _operationTypeRepository.Delete(operationType);
        }

    }
}
