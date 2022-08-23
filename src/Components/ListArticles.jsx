import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";
import { Article } from "./Article";

export const ListArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((articleData) => {
      setArticles(articleData);
    });
  }, []);

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
