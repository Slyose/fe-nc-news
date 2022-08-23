export const Comment = ({ comment }) => {
  return (
    <div className="article_comments">
      <p className="comment_body">
        {comment.author}: {comment.body}
      </p>
      <br></br>
      <div className="comment_votes">Votes: {comment.votes}</div>
    </div>
  );
};
