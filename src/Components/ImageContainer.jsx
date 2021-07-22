import React, { useEffect, useState } from 'react';
import ImageItem from '../Components/Image';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../Redux/imagesSlice';
import Loader from './Loader';

const ImageContainer = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image.value);
  const keyword = useSelector((state) => state.image.keyword);
  const deleteId = useSelector((state) => state.image.deletedAlready);
  const [loadedAll, setLoadedAll] = useState(false);
  const [deleteItem, setDeleteItem] = useState([{ id: null }]);
  console.log(deleteItem);
  // Image preload
  const cacheImages = async () => {
    const promises = await images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src.image_link;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setLoadedAll(true);
  };

  useEffect(() => {
    // Call images
    dispatch(getImages());
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      cacheImages();
    }
    if (deleteId !== null) {
      setDeleteItem([...deleteItem, { id: deleteId }]);
    }
  }, [images]);
  return (
    <section className='image-container'>
      {loadedAll ? (
        images
          .filter(
            (image, index) =>
              image.label.toUpperCase().includes(keyword.toUpperCase()) ||
              deleteItem.find((item) => item.id !== image._id)
          )
          .reverse()
          .map((image, index) => (
            <ImageItem key={image._id} {...image} index={index} />
          ))
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default ImageContainer;
