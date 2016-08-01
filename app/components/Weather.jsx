import React from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import openWeatherMap from '../api/openWeatherMap';

const Weather = React.createClass({
  getInitialState() {
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch(location) {
    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({location, temp});
    }, (errorMessage) => {
      alert(errorMessage);
    });
  },
  render() {
    const {temp, location} = this.state;
    
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    )
  }
});

export default Weather;