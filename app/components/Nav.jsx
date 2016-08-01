import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render() {
    return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</Link>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});

export default Nav;