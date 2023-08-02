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
    message: string;
    _id: string
}

export interface IGetAllUsers {
    _id: string;
    name: string;
    image: string;
    places: string[];
}

export interface IGetAllPlaces {
    title: string;
    description: string;
    image: string;
    address: string;
}

export interface IAddPlace {
    creator?: string;
    title: string;
    description: string;
    address: string;
}

export interface ICreatorId {
    creator?: string;
}