import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          ChatApp
        </Menu.Item>
        <Menu.Item as={NavLink} to='/rooms' name="Rooms" />
        <Menu.Item>
          <Button as={NavLink} to='/createRoom' positive content='Create Room' />
        </Menu.Item>
      </Container>
    </Menu>
  )
}
