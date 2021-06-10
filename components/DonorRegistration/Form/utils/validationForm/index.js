import * as yup from "yup";

export const validations = yup.object().shape({
    name: yup.string().required('O nome do doador é obrigatório!'),
    email: yup.string().email('Informe um e-mail válido!').required('O e-mail é obrigatório!'),
    age: yup.number('Apenas numeros são permitidos!')
        .required('Idade é obrigatória!')
        .min(18,'O doador deve ter no minimo 18 anos!')
        .max(75, 'O doador deve ter no maximo 75 anos!'),
    bloodType: yup.string().required('O tipo sanguíneo é obrigatório!')
})
