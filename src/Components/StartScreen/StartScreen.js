import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartScreen() {

  let navigate = useNavigate();

  function enter(){
    navigate("/quiz/1");
  }
  return (
    <div>
      <h1 onClick={enter}>Enter The Quiz</h1>
    </div>
  )
}

export default StartScreen
