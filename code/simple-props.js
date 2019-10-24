const code = `
    // Props are readonly
    const ComponentWithProps = ({name}) => (
        <span>Hello {name}</span>
    )
    
    const SimpleProps = () => (
        <ComponentWithProps name="George" />
    )

    render(SimpleProps)
`

export default code
