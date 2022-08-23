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
    <>
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
