import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import  *as TYPES  from './actions/actionTypes';

const state= {
  nummer1: 0,
  nummer2: 0,
  summe: 0
};

function reducer(state, action){
  switch(action.type){
    case TYPES.Safe_To_Store:
      const newState = { ...state };
      newState[action.data.target] = action.data.value;
      return newState;
    case TYPES.Create_Sum:
      const newState1 = { ...state };
      newState1.summe = newState1.nummer1 + newState1.nummer2; 
      return newState1;
    default: 
      return state;
  }
};

const middleware = applyMiddleware(createLogger());

const store = createStore(reducer, state, middleware);

export default store;
