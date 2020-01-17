import React, {Component} from 'react';

import './App.css';


const App = ()=> {
const [count, setCount] = useState(0);



const addition = () => {
   this.setState({
     count: this.state.count + 1
   });

 };
const setReset=() => {

   this.setState({count: 0})
 }
const subtraction = () => {
  if (this.state.count > 0) {

  this.setState({count: this.state.count - 1
  })
}
};

 return (
   <div className='app'>
         <div className={(this.state.count % 2 === 0) ? ((this.state.count % 10 === 0 ) ? "button pink" : "button even" ): "button odd" } onClick={this.addition}>

       <h1>{this.state.count}</h1>
     </div>


 <button onClick ={this.addition}>add</button>
     <button onClick ={this.setReset}>Reset</button>
      < button onClick = {this.subtraction}> subtract  </button>
   </div>
 );
}


export default App;
