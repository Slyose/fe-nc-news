import { ListArticles } from "./ListArticles";
import { Link } from "react-router-dom";

export const FrontPage = () => {
  return (
    <div>
      <header className="App-main">
        <h1>This Just In!</h1>
        <h4>
          Hot Topics: <Link to="/articles/topics/coding">Coding</Link>{" "}
          <Link to="/articles/topics/cooking">Cooking</Link>{" "}
          <Link to="/articles/topics/football">Football</Link>
        </h4>
        <h2>Hot Headlines:</h2>
        <ListArticles />
      </header>
    </div>
  );
};
