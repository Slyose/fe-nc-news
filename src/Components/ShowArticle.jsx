import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import { fetchCommentsById } from "../api";
import { Comment } from "./Comment";
import { voteArticleById } from "../api";
import { Link } from "react-router-dom";

export const ShowArticle = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [vote, setVote] = useState(0);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetchArticleById(articleId).then((articleData) => {
      setArticle(articleData);
    });
    fetchCommentsById(articleId).then((commentData) => {
      setComments(commentData);
      setIsLoading(false);
    });
  }, [articleId]);

  const handleVote = (inc_votes) => {
    setVote(vote + inc_votes);
    voteArticleById(articleId, inc_votes).catch(() => {
      setVote(0);
      setIsErrored(true);
    });
  };

  return isLoading ? (
    <p>Loading Article!</p>
  ) : (
    <div>
      <header className="article_title">
        <h1>{article.title}</h1>
      </header>
      <div className="article_details_container">
        <h3 className="article_details">Author: {article.author}</h3>
        <h3 className="article_details">Votes: {article.votes + vote}</h3>

        <button className="upvote-button" onClick={() => handleVote(1)}>
          Upvote
        </button>
        <button className="downvote-button" onClick={() => handleVote(-1)}>
          Downvote
        </button>
        {isErrored ? <p> Something went wrong!</p> : null}
        <h3 className="article_details">
          <Link to={`/articles/${articleId}/comments`}>Comments:</Link>{" "}
          {article.comment_count}
        </h3>
        <h3 className="article_details">
          Date: {new Date(article.created_at).toUTCString()}
        </h3>
      </div>
      <p>{article.body}</p>
      <section className="article_comments_container">
        <h4>Comments:</h4>
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment.comment_id} />;
        })}
      </section>
    </div>
  );
};
