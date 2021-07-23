import React from 'react';
import loader from '../loader.svg';
const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        textAlign: 'center',
        width: '100%',
        height: '80%',
        left: 0,
      }}
    >
      <img style={{ maxWidth: '150px' }} src={loader} alt='loader' />
    </div>
  );
};

export default Loader;
