import DisplayNumber from "../components/DisplayNumber";
//eslint-disable-next-line
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state){//State는 store의 state이다
  return {
    number:state.number//전달하고자 하는 props명과 같아야함
  }//인자 둘중에 있어야 한다면 mapStateProps가 필요함
}//함수이름 마음대로 가능, redux에서 store값이 변경될때마다 호출(=구독)되서 redux(store)의 state의 값을 인자로 받는다. 받은 state값을 가공해서 가공해서 return하고 싶은 props에게 넘겨줄 값을 설정한다
//connect api를 사용하면 등록해놓은 props에 대해서만 구독을 하기 때문에 불필요한 render함수의 호출이 줄어든다

export default connect(mapReduxStateToReactProps)(DisplayNumber);//connect함수를 실행해서 리턴된 함수값(인자로 wrapped component)을 다시 실행한다
//DisplayNumber 컴포넌트를  wrapping한 컴포넌트가 만들어져서 그게 export된다
/*
import React, {Component} from "react";
import store from "../store";
export default class extends Component{
  state = {number:store.getState().number} //기본 state값 설정
  constructor(props){
    super(props);
    //어떠한 컴포넌트가 실행될때 render함수보다 먼저 실행되면서 그 컴포넌트를 초기화 시켜주고 싶은 코드를 입력한다(초기화를 담당)
    store.subscribe(function(){
      this.setState({number: store.getState().number});//setState하면 render가 실행됨
    }.bind(this));//store의 값이 바뀌었을때 호출된다(subscribe했기때문)
  }//constructor함수를 이용해서 DisplayNumber class를 store에 subscribe시킨다
 //store와 직접연결 (depth상관x))
  render(){
    return <DisplayNumber number={this.state.number}></DisplayNumber>
  }
}
*/