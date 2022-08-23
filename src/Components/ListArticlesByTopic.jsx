import { fetchArticlesByTopic } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import { Article } from "./Article";

export const ListArticlesByTopic = ({ topic }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticlesByTopic(topic).then((articleData) => {
      setArticles(articleData);
    });
  }, [topic]);

  return (
    <div>
      <th id="articles_th">
        {articles.map((articles) => {
          return <Article article={articles} />;
        })}
      </th>
    </div>
  );
};
