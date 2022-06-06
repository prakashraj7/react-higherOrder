import * as React from 'react';
import UpdatedComponent from '../compoents/HigherOrderz';

const Counts = (props) => {
  return (
    <div className="container">
      <h3>
        {' '}
        Countz - <span class="ui inverted pink button">{props.count}</span>
      </h3>
      <button class="ui pink button" onClick={props.incssz}>
        Click!
      </button>
      <hr />
    </div>
  );
};

export default UpdatedComponent(Counts);
