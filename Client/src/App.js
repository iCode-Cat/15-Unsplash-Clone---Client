import Home from './Page/Home';
import { useEffect } from 'react';
import './App.scss';
import AddPhoto from './Components/AddPhoto';
import { useSelector } from 'react-redux';
import DeletePhoto from './Components/DeletePhoto';

const scrollHandler = (add) => {
  // Prevent Scroll
  const x = window.scrollX;
  const y = window.scrollY;
  if (add.popup_delete || add.popup_add) {
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  } else {
    window.onscroll = function () {};
  }
};

function App() {
  const add = useSelector((state) => state.popup);

  scrollHandler(add);

  return (
    <>
      {add.popup_delete && <DeletePhoto />}
      {add.popup_add && <AddPhoto />}
      <Home />
    </>
  );
}

export default App;
