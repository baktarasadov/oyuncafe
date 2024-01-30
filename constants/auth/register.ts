import IAuthInputList from "@/types/auth/IAuth";

export const registerInputs: IAuthInputList[] = [
    {
        name: "fullname",
        labelName: "Kullanıcı Adı",
        type: "text",
    },
    {

        name: "email",
        labelName: "E-Posta",
        type: "email",
    },
    {
        name: "password",
        labelName: "Şifre",
        type: "password",
    },

]