import { Component } from 'react';
import './App.css';


import Buttons from './components/buttons/buttons.component'


class App extends Component {
  constructor(){
    super()
  
    this.state = {
    output: ''
    }
  }
  
  onClick = button => {
    if(button === "="){
      this.evaluate()
    }
    else if(button === "AC"){
      this.clear()
    }
    else {
      this.setState({
        output: this.state.output + button
      })
    }
  }

  clear = () => {
    this.setState({
      output:''
    })
  }

  evaluate = ()=> {
    try {
      this.setState({
        output: (eval(this.state.output))
      })
    } catch(e){
      this.setState({
        output: 'ERROR'
      })
    }
  }

    render() {
      return (
        <div>
          <div className='calc'>
            <h1>I'm a calculator</h1>
            
            <Buttons onClick={this.onClick} output={this.state.output}/>
          </div>
        </div>
      )
    }

}


export default App;
