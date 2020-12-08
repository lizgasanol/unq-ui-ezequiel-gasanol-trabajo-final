import React from "react"

const Winner = (props) => {
    return(<>
            {props.winner === "You" && <h1>You win!</h1>}
            {props.winner === "Opponent" && <h1>Opponent wins!</h1>}
            {props.winner === "Tie" && <h1>It's a tie!</h1>}
    </>)
}

export default Winner;