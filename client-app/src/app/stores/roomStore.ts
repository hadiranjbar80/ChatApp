import { makeAutoObservable, runInAction } from "mobx";
import { Room } from "../models/room";
import agent from "../api/agent";

export default class RoomStore {
    rooms: Room[] = [];
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadRooms = async () => {
        this.loadingInitial = true;
        try {
            const res = await agent.Rooms.list();
            runInAction(() => {
                res.forEach(room => {
                    this.rooms.push(room)
                })                
                this.loadingInitial = false;
            })
        } catch (error) {
            console.log(error);
            this.loadingInitial = false;
        }
    }

}