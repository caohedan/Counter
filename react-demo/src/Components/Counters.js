import React,{Component} from 'react'
import Counter from './Counter.js'

export default class Counters extends Component{
    constructor(props){
        super();
        this.state = {
            sum:0
        }
    }
    updateSumCount = (count)=>{
        this.setState({sum:this.state.sum+count})
    }
    render() {
        let counterListElements = [];
        let num = this.props.counterNum;
        while (num--) {
            counterListElements.push(
                <Counter updateSumCount={(e)=>this.updateSumCount(e) }key={num} />
            );
        }

        return (
            <div>
                {counterListElements}
                <span>sum:{this.state.sum}</span>
            </div>
        )
    }
    sum = (sumItem)=>{
        let sum = this.state.sum + sumItem;
        this.setState(sum)
    }

}