import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import {AppBackground} from './Background.js'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Topic/>
         <Content/>
      </div>
    );
  }
}

class Topic extends Component{

   render(){
      return(
        <div>
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome my news App</h1>
          <p className="App-intro">
            Get the latest and most accurate news from around the globe.
          </p>
          </header>
        </div>
      );
   }
}

class Content extends Component{

  render(){
     return(
       <div className="bodydiv">
         <div className="titlediv">
           {/* <img className="logo" alt="logo"
            src ={}
           /> */}
           <p>First API react fetch</p>
         </div>
         {/* end of title div */}
        
        <div> 
          {/* <SplashButtonOne/>
          <SplashButtonTwo/> */}
        </div>
        
        <AppBackground/>

       </div>
     );
  }
}

export default App;
