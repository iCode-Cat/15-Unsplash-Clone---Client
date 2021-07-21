import React, { useEffect } from 'react';
import Image from '../Components/Image';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../Redux/imagesSlice';

const ImageContaier = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image.value);
  useEffect(() => {
    // Call images
    dispatch(getImages());
  }, []);

  return (
    <section className='image-container'>
      {images.length > 0 &&
        images.map((image, index) => (
          <Image key={image._id} {...image} index={index} />
        ))}
    </section>
  );
};

export default ImageContaier;
