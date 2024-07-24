import React from "react";
import "./Quiz.css";

import { useParams, useSearchParams } from 'react-router-dom';


function Quiz(){
    const {questionId} = useParams();
    alert(questionId);
    return(
        <div className="quizbody">
        <div className="quizport">
            <h3>Q1. Choose the right Answer?</h3>
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
            <button>Next</button>
        </div>
        </div>
    );
}

export default Quiz;