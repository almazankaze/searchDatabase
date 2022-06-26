import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Characters from "./pages/Characters";
import SearchPage from "./pages/SearchPage";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/posts/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
