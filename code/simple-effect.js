const code = `
    function SimpleEffect(){
        // useEffect is another React hook
        // Given the changes of a tracked state, 
        // trigger such effect each time

        const [
            countdownStarted,
            toggleCountdown
        ] = useState(false)
        const [timeLeft, setTimeLeft] = useState(10)
        const tickTimer = () => {
            if(timeLeft > 0) setTimeLeft(timeLeft-1)
        }
        const startCountdown = () => toggleCountdown(true)

        useEffect(()=> {
            if(countdownStarted){
                const tick = setTimeout(() =>tickTimer(), 1000)
                return () => clearTimeout(tick)
            }
        }, [countdownStarted, timeLeft])

        return (
            <h3 onClick={() => startCountdown()}>
                Countdown has {timeLeft} left
            </h3>
        )
    }
`

export default code
