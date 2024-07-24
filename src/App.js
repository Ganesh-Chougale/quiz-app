import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

import StartScreen from './Components/StartScreen/StartScreen';
import Quiz from './Components/Quiz/Quiz';
import NoPage from './Components/NoPage/NoPage';

function App() {
  return (
    <div className='thisApp'>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<StartScreen />} /> 
    <Route path="/quiz/:questionId" element={<Quiz/>}/>
    <Route path="*" element={<NoPage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;