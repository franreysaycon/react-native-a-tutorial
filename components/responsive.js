import React from "react"
import styled from "@emotion/styled"
import ResponsiveImage from "../images/responsive.png"

const Image = styled.img`
    width: 20em;
    height: 10em;
`

const Responsive = () => (
    <Image src={ResponsiveImage} />
)

export default Responsive
