import React from "react";



export function APM(props){

    let ticks = props.ticks != null?props.ticks:50
    let keysPressed = props.keysPressed != null?props.keysPressed:0
    const[elapsedTime,setElapsedTime] = React.useState(0)
    React.useEffect(() => {
        const timer = window.setInterval(() =>  setElapsedTime(previousState => previousState+1/ticks) , 1000/ticks);
        return () => window.clearInterval(timer);
        }
        , []);

    return <div className="apm">
            <div>Elapsed Time {elapsedTime.toFixed(2)}</div>
            <div>Actions per Minute {(keysPressed/(elapsedTime/60)).toFixed(2)}</div>

           </div>
}