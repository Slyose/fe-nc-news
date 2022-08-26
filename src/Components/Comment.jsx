import { deleteCommentById } from "../api";
import { useState } from "react";

export const Comment = ({ comment }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  const deleteComment = (comment_id) => {
    setIsDeleted(true);
    setIsErrored(false);
    deleteCommentById(comment_id).catch(() => {
      setIsErrored(true);
      setIsDeleted(false);
    });
  };

  return isDeleted ? (
    <p className="success-text">Comment Deleted!</p>
  ) : (
    <div className="article_comments">
      <h5>
        {comment.author} @ {new Date(comment.created_at).toUTCString()}
      </h5>
      <p className="comment_body">{comment.body}</p>
      <h5 className="comment_votes">Votes: {comment.votes}</h5>
      {comment.author === "jessjelly" ? (
        <button
          id="delete-button"
          onClick={() => deleteComment(comment.comment_id)}
        >
          delete comment
        </button>
      ) : null}
      {isErrored ? (
        <p className="error-text">
          Error deleting comment. Please try again later.
        </p>
      ) : null}
    </div>
  );
};
