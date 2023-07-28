import * as Yup from 'yup';


export const LoginSchema = Yup.object({
    email: Yup.string().email().required('Please enter the email'),
    password: Yup
    .string()
    .required("Please enter the password"),
})