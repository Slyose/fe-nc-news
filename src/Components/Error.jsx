import { Link } from "react-router-dom";

export const Error = ({ error }) => {
  return (
    <>
      <header className="App-main">
        <h1>{error}</h1>
        <h3>
          Are you lost? <Link to="/">Take me home!</Link>
        </h3>
      </header>
    </>
  );
};
