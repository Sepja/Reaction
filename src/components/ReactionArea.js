import React, {useEffect} from "react";
import {difficult, getRandomSign} from "./SignGenerator";


export function  ReactionArea(){



    const[lastCharacterPressed,setLastCharacterPressed] = React.useState("")
    const[score,setScore] = React.useState(0);
    const[randomCharacter,setRandomCharacter] = React.useState("")

    function determineRandomCharacter() {
        return getRandomSign(difficult.medium)
    }

    useEffect(
    () => {
        setInterval(setRandomCharacter(determineRandomCharacter()), 5000);
    },[lastCharacterPressed,score]
    )

    function onKeyPressed(e) {
        if(e.key == 16){
            return;
        }
        if(e.key === randomCharacter){
            setScore(prevState => prevState+1);
        }else{
            setScore(prevState => prevState-1);
        }
        setLastCharacterPressed(e.key)
    }

    return (
        <div
            className="reactArea"
            onKeyPress={e => onKeyPressed(e)}
            tabIndex={0}
            >
            <h1>Current Score {score}</h1>
            <h3>Character to press: {randomCharacter}</h3>
            <h3>Last Character pressed:{lastCharacterPressed}</h3>
        </div>
    )
}