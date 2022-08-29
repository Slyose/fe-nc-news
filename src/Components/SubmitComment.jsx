import { useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentByArticleId } from "../api";

export const SubmitComment = (comments) => {
  const { articleId } = useParams();

  const [newComment, setNewComment] = useState({
    username: "jessjelly",
    body: "",
  });

  const [isCommented, setIsCommented] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  const handleChange = (event) => {
    setIsCommented(false);
    setIsErrored(false);
    setNewComment((currentComment) => {
      const cloneComment = { ...currentComment };
      cloneComment.body = event.target.value;
      return cloneComment;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCommentByArticleId(articleId, newComment)
      .then(() => {
        setIsCommented(true);
      })
      .catch(() => {
        setIsErrored(true);
      });
  };

  return (
    <>
      <form
        className="comment-form"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label> Enter comment:</label>
        <textarea
          required
          id="comment-textarea"
          onChange={(event) => {
            handleChange(event);
          }}
          name="comment"
        ></textarea>
        <button id="submit-button" type="submit">
          Submit
        </button>
      </form>
      {isCommented ? (
        <p className="success-text">Comment successfully added!</p>
      ) : null}
      {isErrored ? (
        <p className="error-text">
          Error adding comment. Please try again later.
        </p>
      ) : null}
    </>
  );
};
