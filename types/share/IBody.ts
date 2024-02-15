import { IFormLogin, IFormRegister } from "../auth/IAuth";

export interface IPostAuthBody {
    username: string;
    pass: string;
    email?: string;
}