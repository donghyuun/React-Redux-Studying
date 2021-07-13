import AddNumber from "../components/AddNumber";
//eslint-disable-next-line
import {connect} from "react-redux";
function mapDispatchToProps(dispatch){//인자로 store.dispatch라는 api를 공급해준다. store따로 import안해도 됨
  return{
    onClick:function(size){
      dispatch({type:'INCREMENT', size:size});     
    }//전달할 props이름인 onClick의 값을 설정한다
  }
}//redux dispatch를 react의 컴포넌트의 props로 연결시켜주는 정보를 담고 있는 함수
export default connect(null, mapDispatchToProps)(AddNumber);

/*
import React, {Component} from "react";
import store from "../store";

export default class extends Component{
  render(){
    return <AddNumber onClick={function(size){
      store.dispatch({type:'INCREMENT', size:size});     
    }}></AddNumber>
  }
}
//원래의 AddNumber을 가져와서 그대로 출력해주는 기능
//redux와 상호작용한다
*/