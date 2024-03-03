import React from "react";
import './App.css';
import Header from "./components/Header";
import AddUser from "./components/AddUser";


const App = () =>{
  return(
    <>
    <h1>Hello React</h1>
    <Header/>
    <AddUser/>
    </>
  )
}

export default App;