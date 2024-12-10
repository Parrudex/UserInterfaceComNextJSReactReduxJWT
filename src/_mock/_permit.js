import { add } from "date-fns";
import _mock from "./_mock";
import { randomInArray, randomNumberRange } from "./funcs";
import { _listCompany } from "./_company";
import { description } from "./text";

// ----------------------------------------------------------------------

export const _permitStatus = [{id:1, name: 'paid'},{id:2, name: 'draft'},{id:3, name: 'overdue'},{id:4, name: 'unpaid'}]
export const _permitType = [{id: 1,name: "Habite-se (Termo de Conclusão de Obra)"}]
export const _permitResponsible =['INTERNAL','PROVIDER']

export const _permit = [...Array(20)].map((_, index) => ({
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
  status:_permitStatus[0],
  //Company
  company: _listCompany[1],
  //PermityType
  type: _permitType[0],
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

