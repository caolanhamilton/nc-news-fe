import axios from "axios"

const ncNewsBackend = axios.create({
  baseURL: "https://ncnewscaolanhamilton.herokuapp.com/api",
});

export const fetchAllArticles = () => {
    return ncNewsBackend.get("/articles").then((response) => {
    return response.data.articles;
  });
};
