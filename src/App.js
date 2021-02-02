import React, { useState }from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props){
  var [number, numberState] = useState(props.initNumber);

  return(
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <input type="button" value="random" onClick={
        function(){
          numberState(Math.random())
        }
      }></input>
    </div>
  );
}

var classStyle = 'color:red'

class ClassComp extends React.Component{
  state = {
    number:this.props.initNumber
  }


  /*
  componentWillMount() -> rendering이 되기 전, component들이 마운트(rendering) 되기 전, 무엇을 해보자고 할 때 선언하여 사용.
  render() -> rendering이 되면서 할 수 있는 일을 정의 가능.
  componentDidMount() -> rendering이 된 후 무엇을 하고 싶다!
  shouldComponentUpdate(nextProps, nextState) => render를 호출할 필요가 있냐 없냐를 우리가
  여기에 코드를 짜는 것을 통해서 할 수 있다.
  png파일 참고.
  */s
  componentWillMount(){
    console.log("%cclass => componentWillMount",classStyle);
  }
  componentDidMount(){
    console.log("%cclass => componentDidMount", classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("%cclass => ComponentUpdate", classStyle);
    return true;
  }

  render(){
    console.log("%cclass => render", classStyle);
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <input type="button" value="random" onClick={
          function (){
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
      </div>
    )
  }
}
export default App;
