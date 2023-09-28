import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main';
import TaskBoard from './pages/TaskBoard/TaskBoard';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/taskboard/:id' element={<TaskBoard />} />
      </Routes>
      
    
    </div>
  );
}

export default App;
