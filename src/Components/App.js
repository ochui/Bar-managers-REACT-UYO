import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import ManagerList from './ManagerList';
class App extends Component {
 render() {
 return (
 <div className="App">
 <header className="App-header">
 <span className="App-logo" alt="logo"><h1>🍻</h1></span>
 <h1 className="App-title"><span role="img">🍻</span>Bar Managers in Uyo <span role="img">🍻</span>  </h1>
 </header>
 <div className="App-intro">
 <ManagerList />
 </div>
 </div>
 );
 }
}
export default App;