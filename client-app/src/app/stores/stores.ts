import { createContext, useContext } from "react";
import RoomStore from "./roomStore";
import ModalStore from "./modalStore";
import CommonStore from "./commonStore";
import UserStore from "./userStore";

interface Store{
    roomStore: RoomStore;
    modalStore: ModalStore;
    commonStore: CommonStore;
    userStore: UserStore
}

export const store: Store = {
    roomStore: new RoomStore(),
    modalStore: new ModalStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}