import IAuthInputList from "@/types/auth/IAuth";

export const registerInputs: IAuthInputList[] = [
    {
        name: "Kullanıcı Adı",
        type: "text",
    },
    {
        name: "E-Posta",
        type: "email",
    },
    {
        name: "Şifre",
        type: "password",
    },

]