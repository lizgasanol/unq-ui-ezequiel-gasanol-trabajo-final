import React from "react";
import {useState} from "react";
import Card from "./Card"
import instrucciones from "./instrucciones.png"
import "./Game.css"

const Game = () => {
    return(
        <>
            <img src={instrucciones} alt="Instrucciones"/>
            <div className="cardwrapper">
                <Card name="Lizard" 
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-lizard.svg" 
                description="Poisons Spock. Devours paper."/>
                <Card name="Rock"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-rock.svg"
                description="Smashes lizard and scissors"/>
                <Card name="Paper"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-paper.svg"
                description="Covers rock. Deauthorizes Spock"/>
                <Card name="Spock"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-spock.svg"
                description="Breaks scissors. Vaporizes rock"/>
                <Card name="Scissors"
                img="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/57f1632d7303fbcd8974425882ffd9919fc4041b/svgs/regular/hand-scissors.svg"
                description="Cuts paper. Decapitates lizard"/>
            </div>
        </>
    );
}

export default Game;