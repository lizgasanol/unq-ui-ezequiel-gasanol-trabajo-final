import React from "react";
import {useState, useEffect} from "react";
import Card from "./Card"
import instrucciones from "./instrucciones.png"
import "./Game.css"

const Game = () => {

    const [gameState, setGameState] = useState({});

    const handleStatusChange = (value) => {
        setGameState({
            playerChoice: value,
            cpuChoice: getRandomChoice(),
            points: sumPointIfApplicable()
        })
    };

    const sumPointIfApplicable = () => {
        let ret = gameState.points;
        if (winsAgainst(gameState.playerChoice,gameState.cpuChoice)) {
            ret++
        }
        return ret;
    }

    useEffect(() => {
        setGameState({
            playerChoice: undefined,
            cpuChoice: undefined,
            points: 0,
        })
    },[])

    const getPoints = () => {
        return gameState.points
    }

    const getRandomChoice = () => {
        return Math.floor(Math.random() * 5) + 1
    }

    const translateChoice = (x) => {
        switch (x){
            case 1:
                return "Scissors";
            case 2:
                return "Paper";
            case 3: 
                return "Rock";
            case 4:
                return "Lizard";
            case 5:
                return "Spock";
            default:
                return "Not chosen"
        }
    }

    const isTie = () => {
        return gameState.playerChoice === gameState.cpuChoice
    }

    const winsAgainst = (aValue, opponentValue) => {
            return opponentValue === shiftValue(aValue,1) || opponentValue === shiftValue(aValue,3)
 
    };

    const shiftValue = (aValue, numberToShift) => {
        let ret = aValue
        for(let i = numberToShift; i !== 0; i--){
            if(ret === 5) {
                ret = 1;
            } else {
                ret++;
            }
        }
        return ret;
    };
    return(
        <>
            <img src={instrucciones} alt="Instrucciones"/>
            <h1>Pick a card</h1>
            Victories: {sumPointIfApplicable()/* si no hago esto los puntos no se actualizan, no se por qué */ } 
            <div className="cardwrapper">
                <Card name="Scissors"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-scissors.svg"
                description="Cuts paper. Decapitates lizard"
                value={1}
                onClick={handleStatusChange}/>
                <Card name="Paper"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-paper.svg"
                description="Covers rock. Deauthorizes Spock"
                value={2}
                onClick={handleStatusChange}/>
                <Card name="Rock"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-rock.svg"
                description="Smashes lizard and scissors"
                value={3}
                onClick={handleStatusChange}/>
                <Card name="Lizard" 
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-lizard.svg" 
                description="Poisons Spock. Devours paper."
                value={4}
                onClick={handleStatusChange}/>
                <Card name="Spock"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-spock.svg"
                description="Breaks scissors. Vaporizes rock"
                value={5}
                onClick={handleStatusChange}/>
            </div>
            {gameState.cpuChoice !== undefined && <>
            {winsAgainst(gameState.playerChoice,gameState.cpuChoice) && <h1>You win!</h1>}
            {winsAgainst(gameState.cpuChoice,gameState.playerChoice) && <h1>Opponent wins!</h1>}
            {isTie() && <h1>It's a tie!</h1>}
            <h1>your choice: {translateChoice(gameState.playerChoice)}</h1>
            <h1>opponent choice: {translateChoice(gameState.cpuChoice)}</h1>
            <h2>To play again pick another card.</h2>
            </>}
        </>
    );
}

export default Game;