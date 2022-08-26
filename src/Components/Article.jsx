import { Link } from "react-router-dom";

export const Article = ({ article }) => {
  return (
    <tr className="articles_tr">
      <td className="articles_td">
        <Link className="article_link" to={`/articles/${article.article_id}`}>
          {article.title}
        </Link>
        <br />
        <div className="author-name">By: {article.author}</div>
      </td>
      <td className="articles_td">
        {" "}
        comments: {article.comment_count} <br /> Votes: {article.votes}
      </td>
    </tr>
  );
};
