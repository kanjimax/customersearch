import React from 'react';

class C02 extends React.Component{
constructor(props){
  super(props);
  this.state= {
    count: 0
  };
  //this.addC= this.addC.bind(this);
}

addC(){
  const {count}= this.state;
  this.setState({count: count+1});
}

addX(x){
  const {count}= this.state;
  this.setState({count: count+x});
}



render(){
  return <div>
           {this.state.count} 
           <button onClick={()=>this.addC()}>+1</button>
           <button onClick={(e)=>this.addX(e.target.textContent*1)}>5</button>
           <button onClick={(e)=>this.addX(e.target.textContent*1)}>10</button>
        </div>

        
}
}

export default C02;