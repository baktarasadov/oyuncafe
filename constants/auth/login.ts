import IAuthInputList from "@/types/auth/IAuth";

export const loginInputs: IAuthInputList[] = [
    {
        name: "fullname",
        placeholder: "Kullanıcı Adı",
        type: "text",
    },

    {
        name: "password",
        placeholder: "Şifre",
        type: "password",
    },

]