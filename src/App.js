import "./App.css";
import { FrontPage } from "./Components/FrontPage";
import { ArticlePage } from "./Components/ArticlePage";
import { ArticleCommentsPage } from "./Components/ArticleCommentsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopicPage } from "./Components/TopicPage";
import { Error } from "./Components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/articles/topics/:topic" element={<TopicPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route
            path="/articles/:articleId/comments"
            element={<ArticleCommentsPage />}
          />
          <Route path="*" element={<Error error="404: Page not found" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
