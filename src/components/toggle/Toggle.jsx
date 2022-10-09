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
      <img
        src="https://res.cloudinary.com/daxrdiiyr/image/upload/v1665311919/dungthinh/sun_vzpm1o.png"
        alt=""
        className="t-icon"
      />
      <img
        src="https://res.cloudinary.com/daxrdiiyr/image/upload/v1665311919/dungthinh/moon_ijrgwr.png"
        alt=""
        className="t-icon"
      />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
