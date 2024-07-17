import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import { Link, NavLink } from 'react-router-dom';
import { useStore } from "../stores/stores";

export default function NavBar() {
  const { userStore: { user, logout } } = useStore();
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

        <Menu.Item position="right">
          <Dropdown pointing='top left' text={user?.username}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={logout} text='Logout' icon='power' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item> 
      </Container>
    </Menu>
  )
}
