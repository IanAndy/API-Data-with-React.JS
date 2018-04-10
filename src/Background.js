import React, { Component } from 'react';
import './App.css';

export class AppBackground extends Component {
 constructor(){
     super();
     this.state ={
       users:[],
     };
 }

 componentDidMount(){
    fetch('https://randomuser.me/api/?results=500')
    .then(results => {
      return results.json();
    }).then(data => {
       let users = data.results.map((user)=>{
         return(
            <div key={user.results}>
              <div className="col s2"> 
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img src={user.picture.large} alt="Images" />
                  </div>
                  <div className="card-content">
                    <span>{user.name.title}</span> 
                    <h5>{user.name.first}</h5>
                    <h5>{user.name.last}</h5>
                    <p>{user.gender}</p>
                  </div>
                </div>
              </div>
            </div>
         )
       })  
       this.setState({users: users});
      //console.log("state", this.state.pictures);
    })

 }

  render() {
    return (
      <div class="row">
          {this.state.users}
      </div>
    )
  }
}