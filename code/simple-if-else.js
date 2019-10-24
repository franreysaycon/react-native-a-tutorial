const code = `
    function SimpleIfElse(){

      const item = 1

      return (
        <span>
            I have {item > 5 ? "many" : "few" } items <br/ >
            {item === 6 && "Item is 6!" }
         </span>
      )
    }
`

export default code
