import React from 'react';
import { postImages, getImages, deleteImage } from '../Redux/imagesSlice';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Components/Header';
import ImageContaier from '../Components/ImageContainer';

// postImages({ label: 'hello', image: 'yolink' })
// getImages()
// deleteImage({id: '60f42428fbc73600154466e9',password: 'juju123'})

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <main>
        <article className='main-wrapper'>
          <ImageContaier />
        </article>
      </main>
    </>
  );
};

export default Home;
