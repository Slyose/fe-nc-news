import { fetchArticlesByTopic } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import { Article } from "./Article";
import { Error } from "./Error";

export const ListArticlesByTopic = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetchArticlesByTopic(topic)
      .then((articleData) => {
        setArticles(articleData);
      })
      .catch(() => {
        setIsErrored(true);
      });
  }, [topic]);

  if (isErrored) return <Error error="404: Topic not found" />;
  return (
    <>
      <h2>{`${topic[0].toUpperCase() + topic.substring(1)} Headlines:`}</h2>
      <table className="article_table">
        <thead id="articles_th">
          {articles.map((articles) => {
            return <Article article={articles} key={articles.article_id} />;
          })}
        </thead>
      </table>
    </>
  );
};
