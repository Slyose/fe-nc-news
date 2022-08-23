import { ListArticles } from "./ListArticles";

export const FrontPage = () => {
  return (
    <div>
      <header className="App-main">
        <h1>This Just In!</h1>
        <h2>Hot Headlines:</h2>
        <ListArticles />
      </header>
    </div>
  );
};
