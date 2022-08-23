import { ShowArticle } from "./showArticle";
import { Link } from "react-router-dom";

export const ArticlePage = () => {
  return (
    <div>
      <header className="App-main">
        <h1>
          <Link className="article_link" to="/">
            This Just In!
          </Link>
        </h1>
        <ShowArticle />
      </header>
    </div>
  );
};
