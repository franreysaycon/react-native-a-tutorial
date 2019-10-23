const code = `
    //import styled from "styled-components"

    const Container = styled.div\`
        background-color: royalblue;
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
    \`

    const LibraryStyling = () => (
        <Container>Library Styled!</Container>
    )

    render(<LibraryStyling />)
`

export default code
