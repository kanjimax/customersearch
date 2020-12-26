import *as TYPES from './actionTypes';

export function saveToStore(data){
  return {
    type: TYPES.Safe_To_Store,
    data
  }
}

export function createSum(){
  return {
    type: TYPES.Create_Sum
  }
}