import React from 'react';
import {Link} from 'react-router';

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugit incidunt maiores molestias nam
        ratione tenetur. Deleniti, pariatur, suscipit! Adipisci architecto autem dicta eligendi exercitationem labore
        mollitia officiis provident ullam.</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

export default Examples;