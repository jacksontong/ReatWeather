import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eius fugiat modi molestiae officiis
        quidem quo! Alias corporis delectus distinctio enim facere ipsa minima non, numquam quas sit tempore
        voluptatum.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data
          by city name.
        </li>
      </ul>
    </div>
  );
};

export default About;