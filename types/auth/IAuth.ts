export default interface IAuthInputList {
    name: string;
    type: string;
    placeholder: string;
}

export interface IFormRegister {
    fullname: string;
    email: string;
    password: string;
}

export interface IFormLogin {
    fullname: string;
    password: string;
}