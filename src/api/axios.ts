import axios, { AxiosError } from "axios";
import { toast } from 'vue3-toastify';
import { ref } from 'vue';

export const axiosClient = axios.create({
    baseURL: `${process.env.VUE_APP_API_BASE_URL}`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    withXSRFToken: true,
})

export const csrf = () => axiosClient.get('/sanctum/csrf-cookie', {withCredentials: true})

export interface ApiErrorResponse {
    errors: {
        [key: string]: string[]; // As chaves são os nomes dos campos, e os valores são arrays de mensagens de erro
    };
    message: string;
}

export const isPerformingRequest = ref<boolean>(false)

export function useAxios(){
    const get = async (url: string) => {
        isPerformingRequest.value = true
        const tokenCrf = await csrf()
        try {
            return await axiosClient.get(url, { 
                headers: {
                    'X-Xsrf-Token': tokenCrf.data
                }
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const e = error as AxiosError<ApiErrorResponse>;
                for (let input in e.response?.data.errors) {
                    toast.error(e.response?.data.errors[input][0]!);
                }
                console.error('Erro na requisição:', error);
            } else {
                console.error('Erro na requisição:', error);
            }
            throw error; // Lança o erro novamente para que o componente que chama useAxios possa lidar com ele.
        } finally{
            isPerformingRequest.value = false
        }
    }

    const post = async (url: string, body: any = {}) => {
        isPerformingRequest.value = true
        const tokenCrf = await csrf()
        try {
            return await axiosClient.post(url, body, { 
                headers: {
                    'X-Xsrf-Token': tokenCrf.data,
                    'Content-Type': `multipart/form-data`
                }
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const e = error as AxiosError<ApiErrorResponse>;
                for (let input in e.response?.data.errors) {
                    toast.error(e.response?.data.errors[input][0]!);
                }
                console.error('Erro na requisição:', error);
            } else {
                console.error('Erro na requisição:', error);
            }
            throw error; // Lança o erro novamente para que o componente que chama useAxios possa lidar com ele.
        } finally{
            isPerformingRequest.value = false
        }
    }

    const patch = async (url: string, body: any) => {
        isPerformingRequest.value = true
        const tokenCrf = await csrf()
        try {
            return await axiosClient.patch(url, body, { 
                headers: {
                    'X-Xsrf-Token': tokenCrf.data,
                    'Content-Type': `multipart/form-data`
                }
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const e = error as AxiosError<ApiErrorResponse>;
                for (let input in e.response?.data.errors) {
                    toast.error(e.response?.data.errors[input][0]!);
                }
                console.error('Erro na requisição:', error);
            } else {
                console.error('Erro na requisição:', error);
            }
            throw error; // Lança o erro novamente para que o componente que chama useAxios possa lidar com ele.
        } finally{
            isPerformingRequest.value = false
        }
    }

    return {
        get,
        post,
        patch
    }
}