import './App.css';

import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import classes from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className = 'app-wrapper'>
            <Header/>
            <Navbar/>
            <div class='app-wrapper-content'>
                <Route component={Dialogs}/>
                <Route component={Profile}/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;