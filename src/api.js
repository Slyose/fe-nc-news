import axios from "axios";

const instance = axios.create({
  baseURL: "https://slate-gray-reindeer-tutu.cyclic.app/api",
});

export const fetchAllArticles = (order, sort_by) => {
  return instance
    .get("/articles", {
      params: { order, sort_by },
    })
    .then((res) => {
      return res.data;
    });
};

export const fetchArticleById = (articleId) => {
  return instance.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
};

export const fetchCommentsById = (articleId) => {
  return instance.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return instance.get(`/articles?topic=${topic}`).then((res) => {
    return res.data;
  });
};

export const voteArticleById = (articleId, inc_votes) => {
  return instance
    .patch(`/articles/${articleId}`, {
      inc_votes,
    })
    .then((response) => {
      return response.data;
    });
};

export const addCommentByArticleId = (articleId, { username, body }) => {
  return instance
    .post(`/articles/${articleId}/comments`, {
      username,
      body,
    })
    .then((response) => {
      return response.data;
    });
};

export const deleteCommentById = (comment_id) => {
  return instance.delete(`/comments/${comment_id}`).then((response) => {
    return response.data;
  });
};
