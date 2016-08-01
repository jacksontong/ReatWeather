import React from 'react';

const WeatherMessage = React.createClass({
  propTypes: {
    temp: React.PropTypes.number,
    location: React.PropTypes.string
  },
  render() {
    const {temp, location} = this.props;

    return (
      <div>
        <p>It's it {temp} in {location}</p>
      </div>
    )
  }
});

export default WeatherMessage;