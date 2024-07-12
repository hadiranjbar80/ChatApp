import React from 'react'
import { Grid } from 'semantic-ui-react'
import RoomDetailedChat from './RoomDetailedChat'
import RoomDetailedSidebar from './RoomDetailedSidebar'

export default function RoomDetails() {
  return (
    <Grid>
    <Grid.Column width={10}>
        <RoomDetailedChat  />
    </Grid.Column>
    <Grid.Column width={6}>
        <RoomDetailedSidebar />
    </Grid.Column>
</Grid>
  )
}
