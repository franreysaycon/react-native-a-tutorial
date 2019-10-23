import React, { useState } from "react"
import {
    LiveProvider,
    LiveEditor,
    LivePreview,
} from "react-live"
import styled from "styled-components"

const scope = { styled, useState }

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90vw;
    height: 90vh;
`

const LeftContent = styled.div`
    display: flex;
    flex: 1;
    font-size: .5em;
    background-color: #222222;
    color: white;

    & > div {
        width: 100%;
    }
`

const RightContent = styled.div`
    display: flex;
    flex: 1;
    flex-grow: 1;
    background-color: white;
`

const Editor = ({code}) => (
    <LiveProvider code={code} scope={scope}>
        <Container>
            <LeftContent>
                <LiveEditor />
            </LeftContent>
            <RightContent>
                <LivePreview />
            </RightContent>
        </Container>
    </LiveProvider>
)

export default Editor
