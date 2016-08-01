import React from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';

const Weather = React.createClass({
  render() {
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm/>
        <WeatherMessage/>
      </div>
    )
  }
});

export default Weather;