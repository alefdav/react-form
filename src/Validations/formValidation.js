import * as yup from 'yup';

export const formSchema = yup.object().shape({
    nome: yup.string().matches(/^[A-Za-z ]*$/, 'Digite um nome válido').required("O campo nome é obrigatório"),
    endereco: yup.string().required("O campo endereço é obrigatório"),
    numero: yup.string().min(8, 'Telefone Inválido').required("O campo número é obrigatório"),
    email: yup.string().email('Digite um email válido').required("O campo email é obrigatório"),
    data: yup.date().max(new Date(), "Você veio do futuro?").required("O campo data é obrigatório").typeError('Digite uma data válida'),
});
