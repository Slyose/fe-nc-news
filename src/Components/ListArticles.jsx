import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";

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
          return (
            <tr id="articles_tr" key={articles.article_id}>
              <td>{articles.title}</td>
              <td>comments: {articles.comment_count}</td>
            </tr>
          );
        })}
      </th>
    </div>
  );
};
