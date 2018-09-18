import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ReactDOM from "react-dom";
// import {Provider, connect}   from 'react-redux';
// import {createStore, combineReducers} from 'redux';
// import {Router, Route} from "react-router-dom";

// import createHistory from "history/createBrowserHistory";



class Hello extends Component {
  render(){
    return(
      <h1>Hello World!</h1>
    )
  }
}




class App extends Component {
  render() {
    return (
      <div className="App"> <Hello /> 
      {/* <SimpleRouter /> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;




// class About extends React.Component {
//   render() {
//     return <h2>About page</h2>;
//   }  
// }
// ReactDOM.render(
//   <SimpleRouter />,
//   document.getElementById("div1")
// );

// class Main extends React.Component {
//   render() {
//     return <h2>Main page</h2>;
//   } 
// }

// class SimpleRouter extends React.Component {
//   render() {
//     return (
//       <Router history={createHistory()}>
//         <div>
//           <Route path="/" component={Main} />
//           <Route path="/about" component={About} />
//         </div>
//       </Router>
//     );
//   } 
// }