import axios, { AxiosResponse } from "axios";
import { Room } from "../models/room";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5199/api'

axios.interceptors.request.use(async response => {
    try{
        await sleep(1000);
        return response;
    }catch(error){
        console.log(error);
        return Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody)
}

const Rooms = {
    list: () => axios.get<Room[]>('/rooms').then(responseBody),
}

const agent = {
    Rooms
}

export default agent