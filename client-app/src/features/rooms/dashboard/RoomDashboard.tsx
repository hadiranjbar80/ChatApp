import { Button, Card, CardContent, Grid, GridColumn, Icon } from "semantic-ui-react";
import { Room } from "../../../app/models/room";
import { useStore } from "../../../app/stores/stores";
import { SyntheticEvent, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";

export default observer(function RoomDashboard() {
    const { roomStore: { loadRooms, rooms, loadingInitial, deleteRoom, loadingDelete } } = useStore();
    const [target, setTarget] = useState('');

    const handleDeleteRoom = (id: string, e: SyntheticEvent<HTMLButtonElement>) => {
        setTarget(e.currentTarget.name);
        deleteRoom(id);
    }

    useEffect(() => {
        if (rooms.length === 0) loadRooms()
    }, [loadRooms, rooms.length])

    if (loadingInitial) return <LoadingComponent content="Loading app..." />

    return (
        <>
            <Grid>
                {rooms.map((room: Room) => (

                    <GridColumn width={4} key={room.id}>
                        <Card>
                            <CardContent header={room.title} />
                            <CardContent description={room.description} />
                            <CardContent extra>
                                <Icon name='user' />4 People
                                <Button as={Link} to={`/rooms/${room.id}`} floated='right' positive content='Join' />
                                <Button
                                    color="red"
                                    icon='trash'
                                    loading={target === room.id && loadingDelete}
                                    onClick={e => handleDeleteRoom(room.id, e)}
                                    floated='right'
                                    name={room.id}
                                    />
                            </CardContent>
                        </Card>
                    </GridColumn>

                ))}
            </Grid>
        </>
    )
})
