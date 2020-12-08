import React from "react";
import {useState, useEffect} from "react";
import Card from "./Card"
import Winner from "./Winner"
import useSound from "use-sound";
import sfx from "./mute-cuica.wav";
import lizardimage from "./images/hand-lizard.svg"
import spockimage from "./images/hand-spock.svg"
import paperimage from "./images/hand-paper.svg"
import scissorsimage from "./images/hand-scissors.svg"
import rockimage from "./images/hand-rock.svg"
import "./Game.css"

const Game = () => {

    const [gameState, setGameState] = useState({});
    const [playSound] = useSound(sfx);

    const handleStatusChange = (value) => {
        setGameState({
            playerChoice: value,
            cpuChoice: getRandomChoice(),
            playerPoints: sumPointIfApplicable(gameState.playerPoints,gameState.playerChoice,gameState.cpuChoice),
            cpuPoints:  sumPointIfApplicable(gameState.cpuPoints,gameState.cpuChoice,gameState.playerChoice),
            winner: getWinner()
        })
        playSound();
    };

    const sumPointIfApplicable = (points,choice,otherChoice) => {
        let ret = points;
        if (winsAgainst(choice,otherChoice)) {
            ret++
        }
        return ret;
    }

    const getWinner = () => {
        if (winsAgainst(gameState.playerChoice,gameState.cpuChoice)) {
            return "You"
        } else if (winsAgainst(gameState.cpuChoice,gameState.playerChoice)) {
            return "Opponent"
        } else {
            return "Tie"
        }
    }

    useEffect(() => {
        setGameState({
            playerChoice: undefined,
            cpuChoice: undefined,
            playerPoints: 0,
            cpuPoints: 0,
            winner: undefined
        })
    },[])

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
            <h1>Pick a card</h1>
            <h3>Your Victories: {sumPointIfApplicable(gameState.playerPoints,gameState.playerChoice,gameState.cpuChoice)
            /* si no hago esto los puntos no se actualizan, no se por qué */ } </h3>
            <h3>Opponent Victories: {sumPointIfApplicable(gameState.cpuPoints,gameState.cpuChoice,gameState.playerChoice)} </h3>
            <div className="cardwrapper">
                <Card name="Scissors"
                img={scissorsimage}
                description="Cuts paper. Decapitates lizard"
                value={1}
                onClick={handleStatusChange}/>
                <Card name="Paper"
                img={paperimage}
                description="Covers rock. Deauthorizes Spock"
                value={2}
                onClick={handleStatusChange}/>
                <Card name="Rock"
                img={rockimage}
                description="Smashes lizard and scissors"
                value={3}
                onClick={handleStatusChange}/>
                <Card name="Lizard" 
                img={lizardimage}
                description="Poisons Spock. Devours paper."
                value={4}
                onClick={handleStatusChange}/>
                <Card name="Spock"
                img={spockimage}
                description="Breaks scissors. Vaporizes rock"
                value={5}
                onClick={handleStatusChange}/>
            </div>
            {gameState.cpuChoice !== undefined && 
                <>
                    <Winner winner={getWinner()}/>
                    <h1>Your choice: {translateChoice(gameState.playerChoice)}</h1>
                    <h1>Opponent choice: {translateChoice(gameState.cpuChoice)}</h1>
                    <h2>To play again pick another card.</h2>
                </>
            }       
        </>
    );
}

export default Game;