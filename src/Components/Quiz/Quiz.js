import React from "react";
import "./Quiz.css";
import QB from "../JSON/QB";
import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from "react";


function Quiz(){
    const {questionId} = useParams();
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    let nextPLZ = (e)=>{
        e.preventDefault();
        setCurrentQuestionIndex(prevIndex => prevIndex +1);
    }

    const question = QB[currentQuestionIndex].question;

      


    console.log(QB[0].question);

    return(
        <div className="quizbody">
        <div className="quizport">
            <h3>{question}</h3>
            <ul>
                <li>
                <input type="radio" name="answer" id="1" />
                    <label htmlFor="1">option 1</label>
                </li>
                <li>
                <input type="radio" name="answer" id="2" />
                    <label htmlFor="2">option 2</label>
                </li>
                <li>
                <input type="radio" name="answer" id="3" />
                    <label htmlFor="3">option 3</label>
                </li>
                <li>
                <input type="radio" name="answer" id="4" />
                    <label htmlFor="4">option 4</label>
                </li>
            </ul>
            <button onClick={nextPLZ} >Next</button>
        </div>
        </div>
    );
}

export default Quiz;



    // QB.map((data) => {
    //     if(questionId == data.id){
    //         console.log(data.question);
    //     }
    // });




