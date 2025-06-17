import React from "react";
import { Route } from "react-router-dom";
import { homepage } from "./pages/HomePage.jsx";
import { createpage } from "./pages/CreatePage.jsx";
import { notedetailpage } from "./pages/NoteDetailPage.jsx";

const App = () => {
  return;
  <Routes>
    <button className="text-red-500 p-4 bg-pink-300 rounded" onClick={() => alert("clicked")}>Button </button>
    <Route path="/" element={<homepage />} />
    <Route path="/create" element={<createpage />} />
    <Route path="/note/:id" element={<notedetailpage />} />
  </Routes>;
};

export default App;
