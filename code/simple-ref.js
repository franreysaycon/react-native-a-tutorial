const code = `
    function SimpleRef(){
      // useRef is another React hook
      // Hooks to a node through ref JSX property

      const inputRef = useRef()
      const readInput = () => {
          alert(inputRef.current.value)
      }

      return (
        <div>
          <input style={{
              fontSize: "1em",
              textAlign: "center",
              border: "2px solid #222222",
            }}
            ref={inputRef}
            value="Toasted Siopao"
            readOnly 
          />
          <button 
            style={{fontSize: "1em"}}
            onClick={readInput}
          >READ</button>
        </div>
      )
    }
`

export default code
