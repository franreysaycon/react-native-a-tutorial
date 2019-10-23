import React from "react"
import styled from "@emotion/styled"
import SSRImage from "../images/ssr.png"

const Image = styled.img`
    width: 30em;
    height: 20em;
`

const SSR = () => (
    <Image src={SSRImage} />
)

export default SSR
