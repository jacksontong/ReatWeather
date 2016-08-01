import React from 'react';
import Nav from './Nav.jsx';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});

export default Main;