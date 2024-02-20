import { IFormLogin, IFormRegister } from "../auth/IAuth";

export interface IPostAuthBody {
    body: IFormLogin | IFormRegister
}