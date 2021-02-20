import { Component } from 'react';
import './App.css';
import Previousoutputs from './components/previousoutputs/previousoutputs.component'
import { db }  from './firebase'
import Buttons from './components/buttons/buttons.component'
import firebase from 'firebase'


class App extends Component {
  constructor(){
    super()
  
    this.state = {
    output: '',
    problem:'',
    enabled: true
    }
  }
  
  onClick = button => {
    if(button === "="){
      this.evaluate()
      
    }
    else if(button === "AC"){
      this.clear()
    }
    else if(button === "DEL" && this.state.enabled === true){
      this.delete()
    }
    else if(button === "DEL" && this.state.enabled === false){
      return
    }
    else {
      this.setState({
        output: this.state.output + button,
        problem: this.state.problem + button
      })
    }
  }

  sendMessage =  () => {
    const calculationsRef = db.collection("results");
    calculationsRef.add({
      problem: this.state.problem,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      solution: this.state.output
    })
    
  }

  clear = () => {
    this.setState({
      output:'',
      problem:'',
      enabled: true
    })
  }
  delete = () => {
    try{
      this.setState({
        output: this.state.output.slice(0, -1),
        problem: this.state.problem.slice(0, -1)
    })
    } catch(e){
      this.setState({
        output: 'ERROR',
        problem: ''
      })
    }
};
  evaluate = ()=> {
    try {
      this.setState({
        output: (eval(this.state.output) || "" ) + "",
        enabled: false
      })
      setTimeout(this.sendMessage, 200)
    } catch(e){
      this.setState({
        output: 'ERROR',
        problem: ''
      })
    }
   
  }

  

    render() {
      return (
        <div>
          <div className='calcbody'>
           
            <div className='calccell'>
            
            <Buttons onClick={this.onClick} output={this.state.output} problem={this.state.problem}/>
            </div>
            <div className='calccell'>
            <Previousoutputs/>
            </div>
            
          </div>
        </div>
      )
    }

}


export default App;
