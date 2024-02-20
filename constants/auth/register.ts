import IAuthInputList from "@/types/auth/IAuth";

export const registerInputs: IAuthInputList[] = [
    {
        name: "username",
        placeholder: "Username",
        type: "text",
        label: "Username",
    },
    {

        name: "email",
        placeholder: "Email address",
        type: "email",
        label: "Email"
    },
    {
        name: "pass",
        placeholder: "Password",
        type: "password",
        label: "Password"
    },

]