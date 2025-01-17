import { Container, Header, Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/stores";

export default observer(function ServerError() {
    const { commonStore } = useStore();

    return (
        <Container>
            <Header as='h1' content='Server Error' />
            <Header sub as='h5' color="red" content={commonStore.error?.statusText} />
            {commonStore.error?.data && (
                <Segment>
                    <Header as='h4' content='Stack trace' color="teal" />
                    <code style={{marginTop: '10px'}}>{commonStore.error.data}</code>
                </Segment>
            )}
        </Container>
    )
})