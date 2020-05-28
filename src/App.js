import React from 'react';
import logo from './logo.svg';
import './App.css';

let a=[];
let f=[];
class ReactJS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      arr:[],
      min:1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  isPositiveInteger(n) {
    var floatN = parseFloat(n);
    return !isNaN(floatN) && isFinite(n) && floatN > 0
        && floatN % 1 == 0;
  }

  difference(a1, a2) {
    var result = [];
    for (var i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1) {
        result.push(a1[i]);
      }
    }
    return result;
  }

  handleSubmit(event) {
   a.push(parseInt(this.state.value));
   this.setState({
    arr: a
  })
   if(this.isPositiveInteger(parseInt(this.state.value))){
     f.push(parseInt(this.state.value));
    let b =[1,2,3,4,5,6,7,8,9];
    let ft= this.difference(b,f);
    let min = Math.min.apply(Math, ft);
    this.setState({
      min:min
    });
  }
  
  event.preventDefault();
  }
  render() {
    return (
      <form className="form-card" onSubmit={this.handleSubmit}>
        <label>
          <input type="number" max="10" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button class="button1" type="submit" value="Submit">Submit</button>
        <div class="answer">Minimun Integer value: <strong>{this.state.min}</strong> </div>
        <p>Your Entered Value is:  
        {this.state.arr.map(el => (
          <span>{el} ,</span>
        ))}
        </p>
      </form>
    );
  }
}

export default ReactJS;
