import * as React from 'react';
import HigherOrderz from './compoents/HigherOrderz';
import Counts from './compoents/Counts';
import Hovz from './compoents/Hovz';
import './style.css';

export default function App() {
  return (
    <div>
      <h1 class="text-decoration-underline" style={{ textAlign: 'center' }}>
        Prakash HOC simple!
      </h1>
      <br />
      <HigherOrderz />
      <Counts />
      <Hovz />
    </div>
  );
}
