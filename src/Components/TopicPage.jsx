import { useParams } from "react-router-dom";
import { ListArticlesByTopic } from "./ListArticlesByTopic";
import { Link } from "react-router-dom";

export const TopicPage = () => {
  let topic = useParams().topic;
  return (
    <div>
      <header className="App-main">
        <h1>
          {" "}
          <Link className="link" to="/">
            This Just In!
          </Link>
        </h1>
        <ListArticlesByTopic topic={topic} />
      </header>
    </div>
  );
};
