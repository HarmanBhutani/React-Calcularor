import React from 'react';
import  Component from 'react';
import './App.css';
import output from './Components/output';
import input from "./Components/input";

class App extends React.Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


  calculate = () => {
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};


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
