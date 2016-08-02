import React from 'react';

const WeatherForm = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func
  },
  onFormSubmit(e) {
    e.preventDefault();

    const location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter city name"/>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    )
  }
});

export default WeatherForm;