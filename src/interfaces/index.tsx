export interface ISignin  {
    name: string;
    email: string;
    password: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IApiResponse {
    data: string;
}

export interface IGetAllUsers {
    name: string;
    image: string;
    places: string[];
}