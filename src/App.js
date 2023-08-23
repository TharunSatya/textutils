
import { useState } from 'react';
import './App.css';
import About from './components/About';

 import Navbar from './components/Navbar';
  import TextForm from './components/TextForm';
import Alert from './components/Alert';


import React from 'react';
import {
  BrowserRouter as Router,
  Routes,

  Route,
  Link
} from "react-router-dom";

  
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);//whether dark mode is enable or not
 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },3000);


  }


  const toggleMode=()=>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      document.body.style.color="white";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode";
      
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color="black";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light Mode";
    
    }
  }
  
  return (
    <>
  
  <Router>
<Navbar title="TextUtils"  mode={mode} aboutText="About TextUtils" toggleMode={toggleMode}/>
 <Alert alert={alert}/>
<div className="container my-3 ml-auto">
    
       <Routes>
       <Route exact path="/" element={<TextForm  showAlert={showAlert} mode={mode}  heading="Enter the text to analyze"/>}>

       </Route>
          <Route exact path="/about" element={<About />}>
            
       
        
         
         
          </Route>
        </Routes>
        
        </div>
        </Router>

 {/*<About/>*/}

 </>


   
  );
}

export default App;
