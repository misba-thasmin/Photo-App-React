import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import View from './components/View';
import PhotoNav from './components/PhotoNav';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes >
        <Route  path="/Home" element = {<PhotoNav /> }/>
        <Route  path="/Add" element = {<Add /> }/>
        <Route  path="/Search" element = {<Search /> }/>
        <Route  path="/Delete" element = {<Delete /> }/>
        <Route  path="/View" element = {<View /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
