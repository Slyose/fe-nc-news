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
          <Link className="article_link" to="/">
            This Just In!
          </Link>
        </h1>
        <h2>{`${topic[0].toUpperCase() + topic.substring(1)} Headlines:`}</h2>
        <ListArticlesByTopic topic={topic} />
      </header>
    </div>
  );
};
