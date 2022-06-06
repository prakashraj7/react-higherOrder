import * as React from 'react';
import UpdatedComponent from '../compoents/HigherOrderz';

const Hovz = (props) => {
  return (
    <div className="container">
      <h3>
        {' '}
        Hov - <span class="ui inverted violet button">{props.count}</span>
      </h3>
      <button class="ui violet button" onMouseOver={props.incssz}>
        Hover!
      </button>
      <hr />
    </div>
  );
};

export default UpdatedComponent(Hovz);
