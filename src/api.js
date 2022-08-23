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
      return res.data;
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
      console.log(res.data);
      return res.data;
    });
};
