import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About';
//import {
//  BrowserRouter,
//  Routes,
//  Route,
//  Link
//  } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setalert] = useState(null);

    const showalert = (message, type) =>{
        setalert({
            msg: message,
            type: type
        })
        setTimeout(() =>{
            setalert(null);
        },1500);
    }

    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showalert("Dark mode has been enabled", "success");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showalert("Light mode has been enabled", "success");
        }
    }

    return(
        <>
        {/*<BrowserRouter>*/}
        <Navbar title="Text Converter" mode={mode} toggleMode ={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        {/*<Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>*/}
          <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} />
        {/*</Routes> */}
        </div>
        {/*</BrowserRouter>*/}
        </>
    );
}

export default App;