import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import TaskBoard from "./pages/TaskBoard/TaskBoard";
import Modal from "./components/Modal/Modal";
import Root from "./components/Root/Root";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Root>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/taskboard/:id" element={<TaskBoard />} />
        </Routes>
      </Root>
    </div>
  );
}

export default App;
