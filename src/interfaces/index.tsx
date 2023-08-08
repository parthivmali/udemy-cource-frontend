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
    email: string;
    userId: string;
    token: string;
}

export interface IGetAllUsers {
    _id: string;
    name: string;
    image: string;
    places: string[];
}

export interface IGetAllPlaces {
    _id: string;
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

export interface IUpdatePlace {
    title: string;
    description: string;
}

export interface IFileWithType {
    type: string;
}