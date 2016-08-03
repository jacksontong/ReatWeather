import React from 'react';

const WeatherForm = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired
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
          <input type="search" ref="location" placeholder="Enter weather by city"/>
          <input type="submit" value="Get Weather" className="button expanded hollow"/>
        </form>
      </div>
    )
  }
});

export default WeatherForm;