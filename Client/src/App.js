import Home from './Page/Home';
import './App.scss';
import AddPhoto from './Components/AddPhoto';
import { useSelector } from 'react-redux';

function App() {
  const add = useSelector((state) => state.popup.popup_add);
  return (
    <>
      {add && <AddPhoto />}
      <Home />
    </>
  );
}

export default App;
