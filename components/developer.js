import React from "react"
import styled from "@emotion/styled"
import DeveloperImage from "../images/developer.jpg"

const Image = styled.img`
    width: 15em;
    height: 15em;
`

const Developer = () => (
    <Image src={DeveloperImage} />
)

export default Developer
