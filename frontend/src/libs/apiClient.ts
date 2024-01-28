import axios, {AxiosError, AxiosResponse} from 'axios'

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    responseType:"json",
    headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "localhost"
    }
})

apiClient.interceptors.response.use(
    (responce: AxiosResponse) => {
        return responce
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)