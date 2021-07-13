import {createStore} from 'redux';

export default createStore(function(state, action){
  if(state === undefined){
    return {number:0}
  }
  if(action.type === 'INCREMENT'){
    return {...state, number: state.number + action.size}
    //...state를 하면 state를 복제하고, 뒤에 추가된 프로퍼티를 추가한다
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
