import axios, { AxiosResponse } from "axios"
import { ISignin,ILogin, IApiResponse } from "../interfaces"
import { AuthHeader } from "./Auth-Header"
// import { AuthHeader } from "./Auth-Header"

const API_URL = "http://localhost:5000/"


//Signup User
export const userSignup = async (data:ISignin) => {
return await axios.post(`${API_URL}api/users/signup`, data)
}

//Login User
export const userLogin = async (logData: ILogin) => {
  try {
    const res: AxiosResponse<IApiResponse | string> = await axios.post(`${API_URL}api/users/login`, logData);
    console.log(res);
    if (typeof res.data === 'string' && res.data === 'Logged in successfully') {
      localStorage.setItem('user', JSON.stringify(res.data));
    }
    return res.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

//Get All Users
export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${API_URL}api/users`,{headers: AuthHeader()});
    return res;
  } catch (error) {
      console.log(error);
  }
}