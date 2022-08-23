import "./App.css";
import { FrontPage } from "./Components/FrontPage";
import { ArticlePage } from "./Components/ArticlePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopicPage } from "./Components/TopicPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="/articles/topics/:topic" element={<TopicPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
