import { Link } from "react-router-dom";

export const ArticleNotFound = () => {
  return (
    <>
      <header className="App-main">
        <h1> 404: Article Not Found</h1>
        <h3>
          Are you lost? <Link to="/">Take me home!</Link>
        </h3>
      </header>
    </>
  );
};
