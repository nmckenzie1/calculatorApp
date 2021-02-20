import React, {Component} from 'react'
import {Output} from '../output/output.component'

import '../../styles.css'
class Buttons extends Component{

    render(){
        return(
    <div className='calcgrid'>
       <div className= 'output'>
           <Output output= {this.props.output} problem={this.props.problem}/>
       </div>
        <button className= 'twospanac' value='AC' onClick={e => this.props.onClick(e.target.value)}>AC</button>
        <button className= 'acdel' value='DEL' onClick={e => this.props.onClick(e.target.value)}>DEL</button>
        <button className= 'operand' value='+' onClick={e => this.props.onClick(e.target.value)}>+</button>

        <button value='7' onClick={e => this.props.onClick(e.target.value)}>7</button>
        <button value='8' onClick={e => this.props.onClick(e.target.value)}>8</button>
        <button value='9' onClick={e => this.props.onClick(e.target.value)}>9</button>
        <button className= 'operand' value='-' onClick={e => this.props.onClick(e.target.value)}>-</button>
        

        <button value='4' onClick={e => this.props.onClick(e.target.value)}>4</button>
        <button value='5' onClick={e => this.props.onClick(e.target.value)}>5</button>
        <button value='6' onClick={e => this.props.onClick(e.target.value)}>6</button>
        <button className= 'operand' value='*' onClick={e => this.props.onClick(e.target.value)}>x</button>
        

        <button value='1' onClick={e => this.props.onClick(e.target.value)}>1</button>
        <button value='2' onClick={e => this.props.onClick(e.target.value)}>2</button>
        <button value='3' onClick={e => this.props.onClick(e.target.value)}>3</button>
        <button className= 'operand' value='/' onClick={e => this.props.onClick(e.target.value)}>÷</button>
        

        <button className= 'twospan' value='0' onClick={e => this.props.onClick(e.target.value)}>0</button>
        <button value='.' onClick={e => this.props.onClick(e.target.value)}>.</button>
        
        

        <button className='equals' value='=' onClick={e => this.props.onClick(e.target.value)}>=</button>
    </div>
        )
    }
}

export default Buttons
