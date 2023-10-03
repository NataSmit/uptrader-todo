import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import TaskBoard from "./pages/TaskBoard/TaskBoard";
import Root from "./components/Root/Root";
import Header from "./components/Header/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <Root>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/taskboard/:id"
            element={
              <DndProvider backend={HTML5Backend}>
                <TaskBoard />
              </DndProvider>
            }
          />
        </Routes>
      </Root>
    </div>
  );
}

export default App;
