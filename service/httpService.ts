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

const createAxiosInstance = async (): Promise<AxiosInstance> => {
    const ip = await getIpAddress();

    return axios.create({
        baseURL: 'https://oyuncafeapi.kemalcelikturk.com',
        timeout: 20000,
        headers: {
            'X-Client-IP': ip,
            'Content-Type': 'application/json',
        },
    });
};

export const postWithAuth = async <T>(url: string, data: T): Promise<IResponse<T>> => {
    try {
        const instance = await createAxiosInstance();
        const response: AxiosResponse<T> = await instance.post(url, data);
        return { data: response.data, statusCode: response.status };
    } catch (error: any) {
        console.log(error);
        return { error: error.response.data.message || "" };
    }
};



// export const getWithoutAuth  =async

export const getToken = async (url: string): Promise<void> => {
    try {
        console.log(process.env.BASE_URL);
        const instance = await createAxiosInstance();
        const response = await instance.get(url);

        if (response.status === 200 && response.data && response.data.gecici_token) {
            const token = response.data.gecici_token;
            cookie.set("token", token, {
                // secure: true,
                httpOnly: true,
                expires: 7,
                sameSite: "strict"
            });

            console.log(cookie.get("token"));
        }
    } catch (error) {
        console.error("Token alınamadı:", error);
    }
}