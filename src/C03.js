import React from 'react';
import { createSum } from './store/actions/actionCreators';
import { TextField, Inputadornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  blue: {
    backgroundColor: 'blue'
  },
  black:{
    color: 'red'
  }
}

class C03 extends React.Component{
constructor(props){
  super(props);
  this.state= {
    nummerx: 0,
    nummery: 0,
    addieren: 0
  };
}


addXY(){
  this.setState({addieren: this.state.nummerx+this.state.nummery});
}



render(){
  const { saveToStoreH, createSumH, summe, classes }= this.props;
  return <div>
          <input onChange={(e)=>saveToStoreH({value: e.target.value*1, target: 'nummer1'})}></input>
          <input onChange={(e)=>saveToStoreH({value: e.target.value*1, target: 'nummer2'})}></input>
          <button onClick={()=>createSumH()}>=</button>
          <input value={summe}></input>
          <TextField id="standard-basic" InputLabelProps={{classes: {root:classes.black}}} classes={{root:classes.blue}} label="Standard" />
        </div>       
}
}

export default withStyles(styles)(C03);