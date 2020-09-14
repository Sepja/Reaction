import React from "react";

export const difficult = {
    easy:1,
    medium:2
}

export function getRandomSign(difficulty){
    const easy = "abcdefghijklmnopqrstuvwxyz,.-";
    const medium = "ABCDEFGHIJKLMNOPQRSTUVWXYZ;:-";

    let resultArray = "";
    if(difficulty === difficult.easy){
        resultArray += easy;
    }else if(difficulty === difficult.medium){
        resultArray += easy;
        resultArray += medium;
    }
    return resultArray.charAt(resultArray.length * Math.random());
}