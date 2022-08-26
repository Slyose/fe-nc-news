import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";
import { Article } from "./Article";

export const ListArticles = () => {
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetchAllArticles(order, sort).then((articleData) => {
      setArticles(articleData);
    });
  }, [order, sort]);

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  return (
    <>
      <section className="sort-by">
        sort by:
        <select value={order} onChange={handleOrder}>
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>
        <select value={sort} onChange={handleSort}>
          <option value="created_at">date</option>
          <option value="comment_count">comments</option>
          <option value="votes">votes</option>
          <option value="title">title</option>
          <option value="author">author</option>
        </select>
      </section>
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
