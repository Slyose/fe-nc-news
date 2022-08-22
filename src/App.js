import "./App.css";
import { FrontPage } from "./Components/FrontPage";
import { useState } from "react";
import { fetchAllArticles } from "./api";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FrontPage />
      </header>
    </div>
  );
}

export default App;
