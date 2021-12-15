import * as yup from 'yup';

export const formSchema = yup.object().shape({
    nome: yup.string().required("O campo nome é obrigatório"),
    endereco: yup.string().required("O campo endereço é obrigatório"),
    numero: yup.number().positive().integer().required("O campo número é obrigatório"),
    email: yup.string().email().required("O campo email é obrigatório"),
    data: yup.date().required("O campo data é obrigatório"),
});
