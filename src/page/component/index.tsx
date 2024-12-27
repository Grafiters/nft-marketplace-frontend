import React from "react"
import Container from "../../component/container"
import Side from "../../component/sider"
import { color } from "../../constant/colors"
import LeftSide from "../../container/side/left"

const ComponentPage: React.FC = () => {
    return (
        <Container
            width="100%"
            height="100vh"
            padding="0"
            margin="0"
            backgroundColor={ color.black }
        >
            <Side
                content={ <LeftSide/> }
                backgroundColor="#000fff"
            />
            <Side
                content="This is right Content"
                backgroundColor="#fff000"
            />
        </Container>
    )
}

export default ComponentPage;