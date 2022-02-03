//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const[emode,set]=useState('enable dark');
  const [alert, setalert] = useState("default");

  const showAlert =(message,type) =>{
        
    setalert({
        msg:message,
        type:type
    })
    setTimeout(() => {
       showAlert(null);
    }, 3000);

   
}
  
  const[mode,setmode]=useState('light');
  const changeTheme = () =>{
     if(mode==='light'){
         setmode('dark');
         set('enable normal');
         document.body.style.backgroundColor='#042743';
         showAlert("Dark mode is set","success");
         document.title='Text-utils -Dark mode';
         
         /*setInterval(() => {
             document.title="Install our app";
         }, 1000);

         setInterval(() => {
          document.title="Sign up";
      }, 2000);*/
     
        
     }
     else{
         setmode('light');
         set('enable dark');
         document.body.style.backgroundColor='white';
         showAlert("Light mode is set", "success");
         document.title='Text-utils Light mode';
        
         
     }

     
}

 

 
  
  return (
   

    <>
     <Router>
   <Navbar title="React page" about="about1" mode={mode} togglemode={changeTheme} tmode={emode} / > 
   <Alert alert={alert}  />
   
    <div className="container">
      {/*<Textforms  showAlert={showAlert}  title="Text analysed" email="Enetr email" text="Text message" mode={mode}/>  */}
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/home"  element={<Textforms  showAlert={showAlert} heading="word counter,character counter" title="Text analysed" email="Enetr email" text="Text message" mode={mode}/>}/>
         
        </Routes>

    </div>
    </Router>

     
    
    </>
  ); 
  }

 
  

export default App;
