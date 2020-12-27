import React from 'react';
import C02searchBar from './C02searchBar';
import C04customerDetails from './C04customerDetails';
import C03searchResults from './C03searchResults'
import { connect } from 'react-redux';
import *as actioncreators from '../store/actions/actionCreators';
import { bindActionCreators} from 'redux';
import { withRouter, Link, Switch, Route, Redirect } from 'react-router-dom';


class C01start extends React.Component{

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
        <Route path="/search" render={({ history, location })=><div><C02searchBar/><C03searchResults history={history} location={location}/></div>}></Route>
        <Route path="/details" render={()=><C04customerDetails/>}></Route>
      </Switch>
      <p>HALLO Bobina</p>
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
 
export default withRouter(connect(mapStateToProps,mapActionCreatorsToProps)(C01start));