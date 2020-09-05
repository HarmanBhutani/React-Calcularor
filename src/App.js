import React from 'react';
import logo from './logo.svg';
import './App.css';
import output from './components/output';
import input from "./components/input";

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  render() {
      return (
          <div>
              <div className="calculator-body">
                  <h1>Simple Calculator</h1>
                  <output result={this.state.result}/>
                  <input onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}

export default App;
view raw
