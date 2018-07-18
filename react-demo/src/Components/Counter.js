import React,{Component} from 'react'
export default class Counter extends Component{
    constructor(props){
        super();
        this.state = {
            count:0
        };
    }
  add = ()=>{
        const count = this.state.count + 1;
        this.setState({count});
  }
  minus = ()=>{
      const count = this.state.count - 1;
      this.setState({count});
  }
    render(){
        return <div>
            <button onClick={this.add} >+</button>
            <span>{this.state.count}</span>
            <button onClick={this.minus}>-</button>
        </div>
    }
}