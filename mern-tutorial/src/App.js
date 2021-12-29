import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetail from './components/ShowBookDetail';
import UpdateBookInfo from './components/UpdateBookInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShowBookList />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
        <Route path="/show-book/:id" element={<ShowBookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
