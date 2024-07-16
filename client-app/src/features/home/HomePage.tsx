import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";
import { useStore } from "../../app/stores/stores";

export default observer(function HomePage() {
  const { userStore, modalStore } = useStore();
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as='h1' inverted>
          ChatApp
        </Header>
        {userStore.isLoggedIn ? (
          <>
            <Header as='h2' inverted content='Welcome to Reactivities' />
            <Button as={Link} to='/rooms' size="huge" inverted>
              Go to ChatApp!
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => modalStore.openModal(<LoginForm />)} size="huge" inverted>
              Login
            </Button>
            <Button onClick={() => modalStore.openModal(<RegisterForm />)} size="huge" inverted>
              Register
            </Button>
          </>
        )}
      </Container>
    </Segment>
  )
})