import React from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import openWeatherMap from '../api/openWeatherMap';

const Weather = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    }
  },
  handleSearch(location) {
    this.setState({isLoading: true});
    
    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({location, temp, isLoading: false});
    }, (errorMessage) => {
      this.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render() {
    const {temp, location, isLoading} = this.state;
    
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

export default Weather;