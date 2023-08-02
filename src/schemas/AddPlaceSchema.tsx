import * as Yup from 'yup';


export const AddPlaceSchema = Yup.object({
    title : Yup.string().min(2).required("Please enter the title"),
    description: Yup.string().min(5).required('Please enter the description'),
    address: Yup.string().min(5).required("Please enter the password")
})