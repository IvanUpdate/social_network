import './App.css';

import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
  return (
        <div class = "app-wrapper">
            <Header/>
            <Navbar/>
            <div class = "app-wrapper-content">
                <Route path='/dialogs' render = {() => (<Dialogs state = {props.state.dialogsPage}/>)}/>
                <Route path='/profile' render = {() => <Profile state = {props.state.profilePage} addPost ={props.addPost}/>}/>
                <Route path='/news' render = {() => <Profile state = {props.state.profilePage}/>}/>
                <Route path='/music' render = {() => <Profile state = {props.state.profilePage}/>}/>
                <Route path='/settings' render = {() => <Profile state = {props.state.profilePage}/>}/>
            </div>
        </div>
  );
}

export default App;