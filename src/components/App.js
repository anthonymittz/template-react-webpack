import React from 'react';
import '../styles/global.css';

const App = () => {
  return (
    <>
      <img id='logo' src='../public/react.png' alt='react-logo' />
      <h1>Welcome to React application!</h1>
      <img id='teapot' src='../public/teapot.svg' alt='teapot' />
      <small>418 | I'm not a teapot!</small>
    </>
  );
};

export default App;
