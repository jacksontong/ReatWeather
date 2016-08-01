import React from 'react';

const WeatherForm = React.createClass({
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Enter city name"/>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    )
  }
});

export default WeatherForm;