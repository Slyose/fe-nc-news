export const addCommentByArticleId = (articleId, username, body) => {
  return axios
    .post(
      `https://modou-nc-news.herokuapp.com/api/articles/${articleId}/comments`,
      {
        username,
        body,
      }
    )
    .then((response) => {
      return response.data;
    });
};