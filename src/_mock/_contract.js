import _mock from "./_mock";
import { _listCompany } from "./_company";

// ----------------------------------------------------------------------
export const _listContractStatus = [{id:1, name: 'paid'},{id:2, name: 'draft'},{id:3, name: 'overdue'},{id:4, name: 'unpaid'}]
export const _listContractType = [{id: 1,name: "Habite-se (Termo de Conclusão de Obra)"},{id: 2,name: "Polícia Civil - Certificado de Produtos Controlados"}]
export const _listContractResponsible =['INTERNAL','EXTERNAL']

export const _listContract = [...Array(20)].map((_, index) => ({
  id: index,
  expirationDate: "2022-08-22T21:02:15.829931Z",
  issueDate: "2022-08-22T21:02:15.829931Z",
  deadLineDate: "2022-08-22T21:02:15.829931Z",
  number: 123,
  internalId: null,
  name: null,
  comments: null,
  active: true,
  hasExpiration: false,
  createdAt: "2022-08-22T21:02:15.829931Z",
  responsible : index < 10 ? 'INTERNAL' : 'EXTERNAL',
  //PermityStatus
  status: index % 2 == 0 ? _listContractStatus[0] : _listContractStatus[1],
  //Company
  company: _listCompany[index],
  //PermityType
  type: index % 2 == 0 ? _listContractType[0] : _listContractType[1],
  //Attachment
  attachments: [{
    name: 'teste.pdf',
    description: 'descrição teste',
    issuedDate: new Date(),
    keyFile: 'key-file_teste'
  }],
  updatedAt: null,
  accountable: "Interno",
}));

