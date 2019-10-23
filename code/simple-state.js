const code = `
    function SimpleState(){
        // useState is a React hook
        // Hooks are functions used to toggle React's state
        // and lifecycle in functional components

        // Track number of button clicks as state
        const [times, clicked] = useState(0)
        const handleClick = () => clicked(times+1)

        return (
            <div style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}>
                <h3>Button was clicked {times} times</h3>
                <button
                    style={{fontSize: "1em"}}
                    onClick={handleClick}
                >Click Me</button>
            </div>
        )
    }
`

export default code
