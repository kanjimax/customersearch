import React from 'react';
import C02 from './C02';
import C03 from './C03';
import Searchfield from './Searchfield';
import CustomerDetail from './CustomerDetail';
import SearchResults from './SearchResults'
import { connect } from 'react-redux';
import *as actioncreators from './store/actions/actionCreators';
import { bindActionCreators } from 'redux';
import { withRouter, Link, Switch, Route, Redirect } from 'react-router-dom';

class C01 extends React.Component{

render(){
  const {saveToStore, createSum, g} = this.props;
  return (
    <div>
      <div>
        <Link to="/search">SEARCH</Link>
        <Link to="/details">DETAILS</Link>
        <Link to="/test">TEST</Link>
      </div>
      <Switch>
        <Redirect exact from="/" to="/search"></Redirect>
        <Route path="/search" render={({ history, location })=><div><Searchfield/><SearchResults history={history} location={location}/></div>}></Route>
        <Route path="/details" render={()=><CustomerDetail/>}></Route>
      </Switch>
      <p>HALLO Bobina</p>
      <div>
        <C02 />
      </div>
      <div>
        <C03 saveToStoreH={saveToStore} createSumH={createSum} summe={g.summe}/>
      </div>
    </div>
  )    
}
}
function mapStateToProps(state){
  return {g: state}
}

function mapActionCreatorsToProps(dispatch){
  return bindActionCreators(actioncreators,dispatch)
}

export default withRouter(connect(mapStateToProps,mapActionCreatorsToProps)(C01));