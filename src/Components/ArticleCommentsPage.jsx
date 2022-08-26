import { ShowArticleComments } from "./ShowArticleComments";
import { Link } from "react-router-dom";

export const ArticleCommentsPage = () => {
  return (
    <div>
      <header className="App-main">
        <h1>
          <Link className="article_link" to="/">
            This Just In!
          </Link>
        </h1>
        <ShowArticleComments />
      </header>
    </div>
  );
};
