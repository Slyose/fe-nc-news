import axios from "axios";

export const fetchAllArticles = () => {
  return axios
    .get("https://modou-nc-news.herokuapp.com/api/articles")
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
      console.log(response.data);
      return response.data;
    });
};
