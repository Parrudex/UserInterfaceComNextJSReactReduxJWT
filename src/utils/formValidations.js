import * as Yup from 'yup';

export const NewAttachmentSchema = Yup.object().shape({
  description: Yup.string().nullable().required('Descrição é obrigatório'),
  issueDate: Yup.string().nullable().required('Data de registro é obrigatório'),
});
