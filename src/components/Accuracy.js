import React from "react";


export function Accuracy(props){
    function calculateAccuracy() {
        if(props.right === 0 && props.wrong === 0){
            return 0;
        }else{
            return (props.right/(props.wrong+props.right)) * 100
        }
    }
    return <div>
        <div className="accuracy">
            <div className="accuracyRatio">
                <div className="accuracyRatio-right">{props.right}</div>
                /
                <div className="accuracyRatio-wrong">{props.wrong}</div>
            </div>
            <div className="accuracyPercentage">Accuracy: {calculateAccuracy().toFixed(2)}%</div>
        </div>

    </div>
}