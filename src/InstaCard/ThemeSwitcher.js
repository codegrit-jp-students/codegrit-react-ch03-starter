import React from 'react';
import PropTypes from 'prop-types'

const ThemeSwitcher = ({ theme, switchTheme }) => (
  <ul className="theme-swither">
    <li>
      <a 
        className={theme === 'light' && "chosen"}
        href
        onClick={(e) => switchTheme('light', e)}>
        Light
      </a>
    </li>
    <li>
      <a 
        className={theme === 'dark' && "chosen"}
        href
        onClick={(e) => switchTheme('dark', e)}>
        Dark
      </a>
    </li>
  </ul>
);

ThemeSwitcher.propTypes = {
  switchTheme: PropTypes.func.isRequired
}

export default ThemeSwitcher;