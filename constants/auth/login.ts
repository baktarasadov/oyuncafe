import IAuthInputList from "@/types/auth/IAuth";

export const loginInputs: IAuthInputList[] = [
    {
        name: "username",
        placeholder: "username",
        type: "text",
        label: "Username",
    },

    {
        name: "pass",
        placeholder: "Password",
        type: "password",
        label: "Password",
    },

]