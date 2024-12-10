import _mock from './_mock';

// ----------------------------------------------------------------------

export const _listUsers = [...Array(20)].map((_, index) => ({
  id: index + 1,
  name: `Usuário - ${index + 1}`,
  createdAt: new Date().toString(),
  updateAt: new Date().toString(),
  password: "Senha 123",
  active: true,
  email: `usuario${index}@webpermits.com`,
  accessGroup: {id: index % 2 == 0 ? 1 : 2, name:index % 2 == 0 ? "SYSTEM" : "OPERATOR"}
}));
