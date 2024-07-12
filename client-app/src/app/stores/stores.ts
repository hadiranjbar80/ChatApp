import { createContext, useContext } from "react";
import RoomStore from "./roomStore";

interface Store{
    roomStore: RoomStore;
}

export const store: Store = {
    roomStore: new RoomStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}