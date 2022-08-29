import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById } from "../api";
import { fetchCommentsById } from "../api";
import { Comment } from "./Comment";
import { SubmitComment } from "./SubmitComment";

export const ShowArticleComments = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(articleId).then((articleData) => {
      setArticle(articleData);
    });
    fetchCommentsById(articleId).then((commentData) => {
      setComments(commentData);
      setIsLoading(false);
    });
  }, [articleId]);

  return isLoading ? (
    <p>Loading Comments!</p>
  ) : (
    <>
      <header className="article_title">
        <h2>
          <Link className="link" to={`/articles/${articleId}/`}>
            {article.title}
          </Link>
        </h2>
      </header>
      <h3>Comment Section</h3>
      <SubmitComment />
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.comment_id} />;
      })}
    </>
  );
};
