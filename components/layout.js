import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
`

const Content = styled.div`
    display: flex;
    flex: 1;
    flex-grow: 10;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`

const Footer = styled.div`
    display: flex;
    flex: 1;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    font-size: 0.6em;
    padding: 0 5em 0 5em;
`

const Layout = ({children}) => (
    <Container>
        <Content>{children}</Content>
        <Footer>
            <span>github: franreysaycon</span>
            <span>Franrey Saycon (me@fsaycon.dev)</span>
        </Footer>
    </Container>
)

export default Layout
