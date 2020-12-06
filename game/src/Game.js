import React from "react";
import {useState, useEffect} from "react";
import Card from "./Card"
import instrucciones from "./instrucciones.png"
import "./Game.css"

const Game = () => {

    const [gameState, setGameState] = useState({});

    const handleStatusChange = (value) => {
        setGameState({
            ...gameState,
            playerChoice: value
        })
        console.log(gameState.playerChoice)
    };

    useEffect(() => {
        setGameState({
            playerChoice: undefined,
            cpuChoice: undefined,
            points: 0,
        })
    },[])

    return(
        <>
            <img src={instrucciones} alt="Instrucciones"/>
            <h1>Pick a card</h1>
            points: {gameState.points}
            <div className="cardwrapper">
                <Card name="Scissors"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-scissors.svg"
                description="Cuts paper. Decapitates lizard"
                value="1"
                onClick={handleStatusChange}/>
                <Card name="Paper"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-paper.svg"
                description="Covers rock. Deauthorizes Spock"
                value="2"
                onClick={handleStatusChange}/>
                <Card name="Rock"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-rock.svg"
                description="Smashes lizard and scissors"
                value="3"
                onClick={handleStatusChange}/>
                <Card name="Lizard" 
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-lizard.svg" 
                description="Poisons Spock. Devours paper."
                value="4"
                onClick={handleStatusChange}/>
                <Card name="Spock"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-spock.svg"
                description="Breaks scissors. Vaporizes rock"
                value="5"
                onClick={handleStatusChange}/>
            </div>
        </>
    );
}

export default Game;