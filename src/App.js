import React, { Component } from 'react';
import './App.css';
import './reset.css';
import routes from './routes';


class App extends Component {

  // authenticate(){
  //   return new Promise(resolve => setTimeout(resolve, 2000))
  // }

  //   componentDidMount(){
  //     this.authenticate().then(() => {
  //       const ele = document.getElementById('ipl-progress-indicator')
  //       if(ele){
  //         ele.classList.add('available')
  //         setTimeout(() => {
  //           ele.outerHTML = ''
  //         }, 2000)
  //       }
  //     })
  //   }
  render() {
    return (
      <div className="App">
      {routes}
      </div>
      
    );
  }
}

export default App;
