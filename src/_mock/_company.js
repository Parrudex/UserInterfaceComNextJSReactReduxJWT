import { add } from "date-fns";
import _mock from "./_mock";
import { randomInArray, randomNumberRange } from "./funcs";

// ----------------------------------------------------------------------

export const _listCompany = [...Array(20)].map((_, index) => ({
  id: index,
  name: `Empresa - ${index}`,
  createdAt: "2022-08-22T21:02:15.829931Z",
  cnpj: `${index < 10 ? '0'+index : index }00000000`,
  active: index % 2 == 0 ? true : false,
  region: "Brazil",
  localization: index % 2 == 0 ? "São Paulo - SP" : "Rio De Janeiro - RJ",
  uf: {
    id: 10,
    name: "Maranhão",
    shortName: "MA",
  },
}));

