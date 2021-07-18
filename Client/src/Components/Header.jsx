import React from 'react';
import Button from './Button';
import './Scss/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-profile'>
        <span class='header-profile-icon material-icons'>person</span>
        <p className='header-profile-name'>MY Unsplash</p>
        <p className='header-profile-label'>devchallenges.io</p>
      </div>
      <div className='header-input'>
        <input placeholder='Search by name' type='text' />
        <span className='material-icons'>search</span>
      </div>
      <div className='header-btn'>
        <Button text='Add a photo' type='contained' size='fullWidth' />
      </div>
    </header>
  );
};

export default Header;
