import FormContact from "../../components/FormContact"
import ListContact from "../../components/listContact"
import { Container } from "./style"

const Home = () => {
    return(
        <Container>
            <FormContact/>
            <ListContact/>
        </Container>
    )
}

export default Home