import React, { useState } from 'react';
import './Scss/AddPhoto.scss';
import { useSelector, useDispatch } from 'react-redux';
import { popupAdd, popupDelete } from '../Redux/popupSlice';
import { deleteImage } from '../Redux/imagesSlice';
import Button from './Button';
const AddPhoto = () => {
  const [password, setPassword] = useState(null);

  const submitHandler = (field, e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();
  const deleteId = useSelector((state) => state.image.delete_id);

  return (
    <div className=' delete-popup popup'>
      <div className='popup-add'>
        <header className='popup-add-header'>Are You Sure?</header>
        <div className='popup-input-wrapper'>
          <p className='popup-add-label'>Password</p>
          <input
            onChange={(e) => submitHandler('password', e)}
            placeholder='******************'
            type='password'
            className='popup-add-input'
          />
        </div>
        <div className='popup-button-wrapper'>
          <span onClick={() => dispatch(popupDelete())}>
            <Button text='Cancel' size='sm' />
          </span>
          <span
            onClick={() => {
              dispatch(deleteImage({ password, id: deleteId }));
            }}
          >
            <Button text='Delete' type='delete' size='sm' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
