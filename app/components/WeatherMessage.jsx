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
        <h3 className="text-center">It's it {temp} in {location}</h3>
      </div>
    )
  }
});

export default WeatherMessage;