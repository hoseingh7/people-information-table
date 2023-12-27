import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import Read from "./Pages/Read";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/create"
          element={<Create />}
        />
        <Route
          path="/update/:id"
          element={<Update />}
        />
        <Route
          path="/read/:id"
          element={<Read />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
