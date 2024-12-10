import { add } from "date-fns";
import _mock from "./_mock";
import { randomInArray, randomNumberRange } from "./funcs";
import { fData } from "src/utils/formatNumber";
import uuidv4 from "src/utils/uuidv4";

// ----------------------------------------------------------------------

export const _listAccessGroup = [...Array(12)].map((_, index) => ({
  id: index,
  name: `SYSTEM - ${index}`,
  createdAt: new Date().setMonth(index),
  updatedAt: new Date().setMonth(index),
  active: index % 2 == 0 ? true : false,
  listRole: [
    {id: uuidv4(), name: 'ADMIN_PERMIT'},
    {id: uuidv4(), name: 'SELECT_PERMIT'},
    {id: uuidv4(), name: 'UPDATE_PERMIT'},
    {id: uuidv4(), name: 'DELETE_PERMIT'},
    {id: uuidv4(), name: 'ADMIN_USER'},
    {id: uuidv4(), name: 'SELECT_USER'},
    {id: uuidv4(), name: 'UPDATE_USER'},
    {id: uuidv4(), name: 'DELETE_USER'},
    {id: uuidv4(), name: 'SELECT_COMPANY'},
    {id: uuidv4(), name: 'UPDATE_COMPANY'},
    {id: uuidv4(), name: 'DELETE_COMPANY'},
  ],
}));

