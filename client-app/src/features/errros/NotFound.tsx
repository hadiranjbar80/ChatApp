import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
  
  return (
    <Segment placeholder>
        <Header icon>
            <Icon name='search' />
            Oops - we've locked everywhere but could not find what you are locking for!
        </Header>
        <Segment.Inline>
            <Button as={Link} to='/rooms'>
                Return to rooms page
            </Button>
        </Segment.Inline>
    </Segment>
  )
}