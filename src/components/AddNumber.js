import React, {Component} from 'react';

export default class AddNumber extends Component{
  state = {size:1}
  render(){
    return(
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={function(){
        this.props.onClick(this.state.size);//상위컴포넌트에서 정의되어 props로 받은 onClick함수를 호출한다
      }.bind(this)}></input>
      <input type="text" value={this.state.size} onChange={function(e){
        this.setState({size:Number(e.target.value)});
      }.bind(this)}></input>
    </div>
    )
  }
}
//redux의 기능을 도려냄으로써 부품으로서의 기능을 살렸다