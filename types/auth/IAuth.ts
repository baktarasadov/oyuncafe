export default interface IAuthInputList {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

interface IBase {
    username: string,
    pass: string
}
export interface IFormRegister extends IBase {
    email: string;
}

export interface IFormLogin extends IBase {

}