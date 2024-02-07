import logo from './logo.svg';
import './App.css';
import Viewdata from './components/Viewdata';
import { AppBar } from '@mui/material';
import Appbar from './components/Appbar';
import { Route, Routes } from 'react-router-dom';
import AddData from './components/AddData';

function App() {
  return (
    <div>
      {/* <Viewdata/>
       */}
       <Appbar/>
       <Routes>
        <Route path='/' element={<Viewdata/>}/>
        <Route path='/add' element={<AddData/>}/>
       </Routes>
    </div>
  );
}

export default App;
