import React from "react"
import styled from "@emotion/styled"
import ProfileImage from "../images/profile.jpg"

const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > h2 {
        margin: 0.5em;
    }

    & > span {
        font-size: .75em;
    }
`

const Credentials = ({children}) => (
    <Container>
        <img style={{
                width: "5em",
                height: "5em",
            }}
            src={ProfileImage}
            alt="Franrey Saycon github" 
        />
        {children}
    </Container>
)

export default Credentials