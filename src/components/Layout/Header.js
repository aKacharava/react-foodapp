import React, { Fragment } from 'react';
import classes from './Header.module.css';
import headerImg from '../../assets/img/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = function(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt="A table of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header