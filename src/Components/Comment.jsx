export const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <p className="article_comments">
      <div className="comment_body">
        {comment.author}: {comment.body}
      </div>
      <br></br>
      <div className="comment_votes">Votes: {comment.votes}</div>
    </p>
  );
};
