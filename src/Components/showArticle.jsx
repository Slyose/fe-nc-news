import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import { fetchCommentsById } from "../api";

export const ShowArticle = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(articleId).then((articleData) => {
      setArticle(articleData);
    });
    fetchCommentsById(articleId).then((commentData) => {
      setComments(commentData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading Article!</p>;
  } else
    return (
      <div>
        {console.log(comments)}
        <header className="article_title">
          <h1>{article.article.title}</h1>
        </header>
        <div className="article_details_container">
          <h3 className="article_details">Author: {article.article.author}</h3>
          <h3 className="article_details">Votes: {article.article.votes}</h3>
          <h3 className="article_details">
            Comments: {article.article.comment_count}
          </h3>
          <h3 className="article_details">
            Date: {new Date(article.article.created_at).toUTCString()}
          </h3>
        </div>
        <p>{article.article.body}</p>
        <section className="article_comments_container">
          <h4>Comments:</h4>
          {comments.map((comment) => {
            return (
              <p className="article_comments">
                {comment.author}: {comment.body}
                <br></br>Votes: {comment.votes}
              </p>
            );
          })}
        </section>
      </div>
    );
};
