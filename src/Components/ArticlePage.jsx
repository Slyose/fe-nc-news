import { ShowArticle } from "./ShowArticle";
import { Link } from "react-router-dom";

export const ArticlePage = () => {
  return (
    <div className="App-main">
      <header>
        <h1>
          <Link className="link" to="/">
            This Just In!
          </Link>
        </h1>
      </header>
      <ShowArticle />
    </div>
  );
};
