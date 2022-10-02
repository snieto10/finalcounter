import React from "react";
import Counters from "./components/counters.jsx";
import NavBar from "./components/navBar.jsx";
import ToDoList from "./components/toDoList.jsx";
import { House } from "./components/house.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/counter" element={<Counters />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/todolist/:id" element={<House />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
