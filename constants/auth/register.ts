import IAuthInputList from "@/types/auth/IAuth";

export const registerInputs: IAuthInputList[] = [
    {
        name: "fullname",
        placeholder: "Full name",
        type: "text",
    },
    {

        name: "email",
        placeholder: "Email address",
        type: "email",
    },
    {
        name: "password",
        placeholder: "Password",
        type: "password",
    },

]