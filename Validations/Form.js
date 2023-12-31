import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    Email: yup.string().email("Por favor insira um email valido"),
    Password: yup.string().min(8,({min})=> `A senha deve ter no mínimo ${min} digitos`)
})

export const cadastroValidationSchema= yup.object().shape({
    Email: yup.string().email("Por favor insira um email valido"),
    Password: yup.string().min(8,({min})=> `A senha deve ter no mínimo ${min} digitos`),
    CPF: yup.string().min(11, ({min})=>`Coloque um CPF valido com no minino ${min} digitos`)
})