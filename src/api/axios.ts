import axios from "axios";

export const axiosClient = axios.create({
    baseURL: `${process.env.VUE_APP_API_BASE_URL}`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    withXSRFToken: true,
})

export const csrf = () => axiosClient.get('/sanctum/csrf-cookie', {withCredentials: true})

export function useAxios(){
    const post = async (url: string, body: any) => {
        const tokenCrf = await csrf()
        try {
            return axiosClient.post(url, body, { 
            headers: {
                'X-Xsrf-Token': tokenCrf.data
            }});
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    return {
        post
    }
}

export interface ApiErrorResponse {
    errors: {
        [key: string]: string[]; // As chaves são os nomes dos campos, e os valores são arrays de mensagens de erro
    };
    message: string;
}