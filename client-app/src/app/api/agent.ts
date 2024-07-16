import axios, { AxiosResponse } from "axios";
import { Room, RoomFormValues } from "../models/room";
import { User, UserFormValues } from "../models/user";
import { store } from "../stores/stores";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5199/api'

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if(token && config.headers) config.headers.Authorization = `bearer ${token}`;
    return config;
})

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
    create: (room: RoomFormValues) => requests.post<void>('/rooms', room),
    delete: (id: string) => requests.del<void>(`/rooms/${id}`),
    details: (id: string) => requests.get<Room>(`/rooms/${id}`)
}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}

const agent = {
    Rooms,
    Account
}

export default agent