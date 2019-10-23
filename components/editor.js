import React, { useState, useEffect, useRef } from "react"
import {
    LiveProvider,
    LiveEditor,
    LivePreview,
} from "react-live"
import styled from "styled-components"


const scope = { styled, useState, useEffect, useRef }

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
    display: block;
    padding: 1em;
    height: 100%;
    background-color: white;

    & > div {
        width: 100%;
        height: 100%;
    }
`

const Editor = ({code, noInline}) => (
    <LiveProvider code={code} scope={scope} noInline={noInline}>
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
