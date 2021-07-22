import React from 'react';
import Button from './Button';
import './Scss/Header.scss';
import { useDispatch } from 'react-redux';
import { popupAdd } from '../Redux/popupSlice';
import { keyword } from '../Redux/imagesSlice';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className='header'>
      <div className='header-profile'>
        <span className='header-profile-icon material-icons'>person</span>
        <p className='header-profile-name'>MY Unsplash</p>
        <p className='header-profile-label'>devchallenges.io</p>
      </div>
      <div className='header-input'>
        <input
          onChange={(e) => dispatch(keyword(e.target.value))}
          placeholder='Search by name'
          type='text'
        />
        <span className='material-icons'>search</span>
      </div>
      <div onClick={() => dispatch(popupAdd())} className='header-btn'>
        <Button text='Add a photo' type='primary' size='fullWidth' />
      </div>
    </header>
  );
};

export default Header;
