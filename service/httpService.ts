import { IPostAuthBody } from '@/types/share/IBody';
import { IResponse } from '@/types/share/IResponse';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import cookie from 'js-cookie';
dotenv.config();
const getIpAddress = async (): Promise<string> => {
    try {
        const response = await axios.get("https://api.ipify.org/?format=json");
        return response.data.ip;
    } catch (error) {
        console.error("IP alınamadı:", error);
        return '';
    }
};
export const createAxiosInstance = async (): Promise<AxiosInstance> => {
    const ip = await getIpAddress();

    return axios.create({
        baseURL: 'https://oyuncafeapi.kemalcelikturk.com',
        timeout: 20000,
        headers: {
            'X-Client-IP': ip,
            'Content-Type': 'application/json',
            'Authorization': cookie.get("token")
        },
    });
};

export const postAuth = async <T>(url: string, data: IPostAuthBody): Promise<IResponse<T>> => {
    try {
        const instance = await createAxiosInstance();
        const response = await instance.post(url, {
            ...data.body
        });
        const token = response.data.token;
        if (token) {
            cookie.set("token", token, {
                secure: true,
                // httpOnly: true,
                expires: 7,
                sameSite: "strict"
            });
            return { data: response.data.content, statusCode: response.status };
        }

        console.log(response.data.errorMessage);

        return { error: response.data.errorMessage.join(""), statusCode: response.status };
    } catch (error: any) {
        console.log(error.response.data.errorMessage);
        return { error: error.response.data.errorMessage.join("") };
    }
};



// export const getWithoutAuth  =async

export const getToken = async (url: string): Promise<boolean> => {
    try {
        const instance = await createAxiosInstance();
        const response = await instance.get(url);
        if (response.status === 200 && response.data && response.data.gecici_token) {
            const token = response.data.gecici_token;
            cookie.set("token", token, {
                secure: true,
                // httpOnly: true,
                expires: 7,
                sameSite: "strict"
            });
            return true;

        }
    } catch (error) {
        console.error("Token alınamadı:", error);
        return false;
    }
    return false;
}