import * as Yup from 'yup';


export const SignupSchema = Yup.object({
    name : Yup.string().min(2).max(20).required("Please enter the first name"),
    email: Yup.string().email().required('Please enter the email'),
    password: Yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required("Please enter the password"),
})