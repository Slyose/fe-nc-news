import axios from "axios";

export const fetchAllArticles = (order, sort_by) => {
  return axios
    .get("https://modou-nc-news.herokuapp.com/api/articles", {
      params: { order, sort_by },
    })
    .then((res) => {
      return res.data;
    });
};

export const fetchArticleById = (articleId) => {
  return axios
    .get(`https://modou-nc-news.herokuapp.com/api/articles/${articleId}`)
    .then((res) => {
      return res.data.article;
    });
};

export const fetchCommentsById = (articleId) => {
  return axios
    .get(
      `https://modou-nc-news.herokuapp.com/api/articles/${articleId}/comments`
    )
    .then((res) => {
      return res.data;
    });
};

export const fetchArticlesByTopic = (topic) => {
  return axios
    .get(`https://modou-nc-news.herokuapp.com/api/articles?topic=${topic}`)
    .then((res) => {
      return res.data;
    });
};

export const voteArticleById = (articleId, inc_votes) => {
  return axios
    .patch(`https://modou-nc-news.herokuapp.com/api/articles/${articleId}`, {
      inc_votes,
    })
    .then((response) => {
      return response.data;
    });
};

export const addCommentByArticleId = (articleId, { username, body }) => {
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

export const deleteCommentById = (comment_id) => {
  return axios
    .delete(`https://modou-nc-news.herokuapp.com/api/comments/${comment_id}`)
    .then((response) => {
      return response.data;
    });
};
