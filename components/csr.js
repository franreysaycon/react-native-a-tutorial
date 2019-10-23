import React from "react"
import styled from "@emotion/styled"
import CSRImage from "../images/csr.png"

const Image = styled.img`
    width: 30em;
    height: 20em;
`

const CSR = () => (
    <Image src={CSRImage} />
)

export default CSR
