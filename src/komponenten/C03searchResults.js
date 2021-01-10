/* eslint-disable no-console */
import React from 'react';

class C03searchResults extends React.Component {
  componentDidMount() {
    console.log('C03 did mount');
  }

  componentDidUpdate() {
    console.log('C03 received update');
    console.log(new Date());
  }

  componentWillUnmount() {
    console.log('C03 will unmount');
  }

  render() {
    return <div>Results</div>;
  }
}

export default C03searchResults;
