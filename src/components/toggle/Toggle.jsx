import React from 'react';

import './toggle.css';
// import Sun from './sun.png';
// import Moon from './moon.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };
  return (
    <div className="t">
      <img src="./sun.png" alt="" className="t-icon" />
      <img src="./moon.png" alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
