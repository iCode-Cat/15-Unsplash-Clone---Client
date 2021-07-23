import Home from './Page/Home';
import './App.scss';
import AddPhoto from './Components/AddPhoto';
import { useSelector } from 'react-redux';
import DeletePhoto from './Components/DeletePhoto';

function App() {
  const add = useSelector((state) => state.popup);

  return (
    <>
      {add.popup_delete && <DeletePhoto />}
      {add.popup_add && <AddPhoto />}
      <Home />
    </>
  );
}

export default App;
