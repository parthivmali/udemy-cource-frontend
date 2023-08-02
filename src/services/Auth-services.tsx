import axios, { AxiosResponse } from "axios"
import { ISignin,ILogin, IApiResponse, IAddPlace } from "../interfaces"
import { AuthHeader } from "./Auth-Header"

const API_URL = "http://localhost:5000/"


//Signup User
export const userSignup = async (data:ISignin) => {
return await axios.post(`${API_URL}api/users/signup`, data)
}

//Login User
export const userLogin = async (logData: ILogin) => {
  try {
    const res: AxiosResponse<IApiResponse | string> = await axios.post(`${API_URL}api/users/login`, logData);
    if (res.data) {
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


// ----------------------------------------------------------------

//Add place :

export const addPlace = async (createdPlace:IAddPlace) => {
  return await axios.post(`${API_URL}api/places`,createdPlace)
}

//Get All Places :
export const getAllPlaces = async () => {
  try {
      const getLocalData = localStorage.getItem('user')
      let res; 
      if(getLocalData){
        const localData = JSON.parse(getLocalData);
        res = await axios.get(`${API_URL}api/places/user/${localData._id}`,{headers: AuthHeader()});
      }
    return res
  } catch (error) {
    console.log(error);   
  }
}

// Get Single user place :
export const getSinglePlaces = async (id:string) => {
  console.log(id);
  try {
    let res; 
    if(id){
      res = await axios.get(`${API_URL}api/places/user/${id}`,{headers: AuthHeader()});
    }
    return res
} catch (error) {
  console.log(error);   
}
}