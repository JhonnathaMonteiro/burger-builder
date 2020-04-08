import React from 'react';

import logoImg from '../../assets/images/burger-logo.png';

import classes from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={logoImg} alt="MyBurgerApp"/>
    </div>
  )
}

export default Logo