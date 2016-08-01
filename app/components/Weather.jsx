import React from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';

const Weather = React.createClass({
  getInitialState() {
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch(location) {
    this.setState({
      location: location,
      temp: 23
    })
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