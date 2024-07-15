import { makeAutoObservable, runInAction } from "mobx";
import { Room, RoomFormValues } from "../models/room";
import agent from "../api/agent";

export default class RoomStore {
    rooms: Room[] = [];
    loadingInitial = false;
    selectedRoom: Room | undefined = undefined;
    loadingDelete = false;

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

    loadRoom = async (id: string) => {
        try {
            if (this.rooms.find(x => x.id === id)) {
                this.selectedRoom = this.rooms.find(x => x.id === id);
            }
            const room = await agent.Rooms.details(id)
            runInAction(() => {
                this.selectedRoom = room;
            })
        } catch (error) {
            console.log(error);
        }
    }

    createRoom = async (room: RoomFormValues) => {
        try {
            await agent.Rooms.create(room);
            const newRoom = new Room(room)
            this.rooms = [...this.rooms, newRoom];
            runInAction(() => {
                this.selectedRoom = newRoom;
            })
        } catch (error) {
            console.log(error);
        }
    }

    deleteRoom = async (id: string) => {
        this.loadingDelete = true;
        try {
            await agent.Rooms.delete(id);
            this.rooms = this.rooms.filter(x => x.id !== id);
            runInAction(() => {
                this.loadingDelete = false;
            })
        }
        catch (error) {
            console.log(error);
            runInAction(() => {
                this.loadingDelete = false;
            })
        }
    }

}