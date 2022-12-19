import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Form from './components/AddText'

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path ='/' index element = {<Login/>}/>
        <Route path ='/register' element = {<Register/>}/>
        <Route path = '/homePage' element = {<><HomePage/><Form/></>}/>
       
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
