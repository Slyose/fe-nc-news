import axios from "axios";

export const fetchAllArticles = () => {
  return axios
    .get("https://modou-nc-news.herokuapp.com/api/articles")
    .then((res) => {
      return res.data;
    });
};
