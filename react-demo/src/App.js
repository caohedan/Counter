import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './Components/Counters.js'
class App extends Component {

    render() {
        let data =this.props.data;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Counters counterNum={5}/>
            </div>
        );
    }
}

export default App;

