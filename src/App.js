import React from 'react';
import {
    BrowserRouter as Router, 
    Switch,
    Route
    } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
    return (
        <>
        <div className="bodyPage">
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                </Switch>
            </Router>
        </div> 
        <Footer/>
        </>
    );
}

export default App;
