import React, {useEffect} from "react";
import {difficult, getRandomSign} from "./SignGenerator";
import {APM} from "./APM";
import {Accuracy} from "./Accuracy";


export function  ReactionArea(){



    const[lastCharacterPressed,setLastCharacterPressed] = React.useState("")
    const[score,setScore] = React.useState(0);
    const[randomCharacter,setRandomCharacter] = React.useState("")
    const[keysPressed,setKeysPressed] = React.useState(0)
    const[right,setRight] = React.useState(0)
    const[wrong,setWrong] = React.useState(0)
    function determineRandomCharacter() {
        return getRandomSign(difficult.medium)
    }

    useEffect(
    () => {
        setInterval(setRandomCharacter(determineRandomCharacter()), 5000);
    },[lastCharacterPressed,score]
    )

    function onKeyPressed(e) {
        setKeysPressed(prevState => prevState+1)
        if(e.key == 16){
            return;
        }
        if(e.key === randomCharacter){
            setScore(prevState => prevState+1);
            setRight(prevState => prevState +1);
        }else{
            setWrong(prevState => prevState +1);
            setScore(prevState => prevState-1);
        }
        setLastCharacterPressed(e.key)
    }


    return (
        <div className="reactArea" autofocus="autofocus"d
            onKeyPress={e => onKeyPressed(e)}
            tabIndex={0}
            >
            <APM keysPressed={keysPressed}></APM>
            <div className="centerFlex">
            <div className="score">Score {score}</div>
                <Accuracy right={right} wrong={wrong}/>

            </div>
            <div className="gap-20"></div>
            <div className="gap-20"></div>
            <div className="gap-20"></div>
            <div className="gap-20"></div>
            <div className="centerFlex">
                <div className= "huge">Press:   {randomCharacter}</div>
                <h3>Last Character pressed:{lastCharacterPressed}</h3>
            </div>


        </div>
    )
}