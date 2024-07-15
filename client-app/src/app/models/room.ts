export interface Room {
  id: string;
  title: string;
  description: string;
  image: string;
  type: number;
  capacity: number;
}

export class Room implements Room{
  constructor(init?: RoomFormValues) {
    Object.assign(this, init);
  }
}

export class RoomFormValues {
  id?: string;
  title: string = '';
  description: string = '';
  image: string = '';
  type?: number = 0;
  capacity: number = 10;


  /**
   *
   */
  constructor(room?: RoomFormValues) {
    if(room){
      this.id = room.id;
      this.title = room.title;
      this.description = room.description;
      this.capacity = room.capacity;
      this.type = room.type;
    }
  }
}