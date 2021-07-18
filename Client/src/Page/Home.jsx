import React from 'react';
import { postImages, getImages } from '../Redux/imagesSlice';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <main>
      <article className='main-wrapper'>
        <h1 onClick={() => dispatch(postImages('hello', 'link'))}>HELLO</h1>
      </article>
    </main>
  );
};

export default Home;
