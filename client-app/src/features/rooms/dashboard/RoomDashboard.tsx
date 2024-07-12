import { Button, Card, CardContent, Grid, GridColumn, Icon } from "semantic-ui-react";
import { Room } from "../../../app/models/room";
import { useStore } from "../../../app/stores/stores";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function RoomDashboard() {
    const { roomStore: { loadRooms, rooms, loadingInitial } } = useStore();

    useEffect(() => {
        if (rooms.length === 0) loadRooms()
    }, [loadRooms, rooms.length])

    if(loadingInitial) return <LoadingComponent content="Loading app..." />

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
                                <Button floated='right' positive content='Join' />
                            </CardContent>
                        </Card>
                    </GridColumn>

                ))}
            </Grid>
        </>
    )
})
