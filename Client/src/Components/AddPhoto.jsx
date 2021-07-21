import React, { useState } from 'react';
import './Scss/AddPhoto.scss';
import { useSelector, useDispatch } from 'react-redux';
import { popupAdd } from '../Redux/popupSlice';
import { postImages } from '../Redux/imagesSlice';
import Button from './Button';
const DeletePhoto = () => {
  const [imageObject, setImageObject] = useState({
    label: null,
    image: null,
  });

  const submitHandler = (field, e) => {
    setImageObject({ ...imageObject, [field]: e.target.value });
  };

  const imagePostHandler = () => {
    const { label, image } = imageObject;
    if (
      label === null ||
      image === null ||
      !['.png', '.jpg', '.jpeg', '.svg'].some((slug) => image.includes(slug))
    )
      return;
    dispatch(postImages(imageObject, dispatch));
    setImageObject({ label: null, image: null });
  };

  console.log(imageObject);
  const dispatch = useDispatch();
  const value = useSelector((state) => state);
  return (
    <div className='popup'>
      <div className='popup-add'>
        <header className='popup-add-header'>Add a new photo</header>
        <div className='popup-input-wrapper'>
          <p className='popup-add-label'>Label</p>
          <input
            onChange={(e) => submitHandler('label', e)}
            placeholder='Suspendisse elit massa'
            type='text'
            className='popup-add-input'
          />
        </div>
        <div className='popup-input-wrapper'>
          <p className='popup-add-label'>Photo Link</p>
          <input
            onChange={(e) => submitHandler('image', e)}
            placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'
            type='text'
            className='popup-add-input'
          />
        </div>
        <div className='popup-button-wrapper'>
          <span onClick={() => dispatch(popupAdd())}>
            <Button text='Cancel' size='sm' />
          </span>
          <span
            onClick={() => {
              imagePostHandler();
            }}
          >
            <Button text='Submit' type='primary' size='sm' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeletePhoto;
