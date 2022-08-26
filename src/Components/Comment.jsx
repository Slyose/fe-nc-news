export const Comment = ({ comment }) => {
  return (
    <div className="article_comments">
      <h5>
        {comment.author} @ {new Date(comment.created_at).toUTCString()}
      </h5>
      <p className="comment_body">{comment.body}</p>
      <h5 className="comment_votes">Votes: {comment.votes}</h5>
    </div>
  );
};
