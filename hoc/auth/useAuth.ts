import { useState } from "react";
import { getToken, postAuth } from "@/service/httpService";
import { IFormLogin, IFormRegister } from "@/types/auth/IAuth";
import { useRouter } from "next/navigation";

const useAuth = (path: string) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const router = useRouter();

    const onSubmit = async (values: IFormRegister | IFormLogin) => {
        try {
            await getToken("/Auth/preRegister");
            const { data, statusCode, error } = await postAuth<any>(path, {
                body: { ...values }
            });

            if (data) {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    router.push("/");
                }, 3000);
            } else {
                setError(error);
                setLoading(false);
            }
            console.log(data, statusCode, error);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    };

    return { loading, error, setError, onSubmit };
};

export default useAuth;


