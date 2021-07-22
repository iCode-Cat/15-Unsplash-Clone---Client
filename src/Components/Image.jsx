import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { popupDelete } from '../Redux/popupSlice';
import { deletePhoto } from '../Redux/imagesSlice';
import Button from './Button';
import './Scss/Image.scss';
const Image = ({ _id, label, image_link }) => {
  const dispatch = useDispatch();

  const [controller, setController] = useState(false);
  return (
    <div
      onMouseEnter={() => setController(true)}
      onMouseLeave={() => setController(false)}
      className='img-item-box'
    >
      {controller && (
        <div className='img-item-box-control'>
          <span
            onClick={() => {
              dispatch(popupDelete(_id, dispatch));
              dispatch(deletePhoto(_id));
            }}
          >
            <Button text='delete' size='xsm' type='delete' />
          </span>
          <h1>{label}</h1>
        </div>
      )}
      <img className='img-item' src={image_link} alt={label} />
    </div>
  );
};

export default Image;
