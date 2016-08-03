import React from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import openWeatherMap from '../api/openWeatherMap';
import ErrorModal from './ErrorModal';

const Weather = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    }
  },
  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    
    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({location, temp, isLoading: false});
    }, (e) => {
      this.setState({isLoading: false, errorMessage: e.message});
    });
  },
  componentDidMount() {
    const location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps(newProps) {
    const location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render() {
    const {temp, location, isLoading, errorMessage} = this.state;
    
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage}/>;
      }
    }
    
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

export default Weather;