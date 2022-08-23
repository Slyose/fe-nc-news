import { Link } from "react-router-dom";

export const Article = ({ article }) => {
  return (
    <tr id="articles_tr" key={article.article_id}>
      <td>
        <Link className="article_link" to={`/articles/${article.article_id}`}>
          {article.title}
        </Link>
      </td>
      <td> comments: {article.comment_count}</td>
    </tr>
  );
};
