import axios from "axios"

const ncNewsBackend = axios.create({
  baseURL: "https://ncnewscaolanhamilton.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
    return ncNewsBackend.get("/articles", { params: { 'topic': topic } })
        .then((response) => {
    return response.data.articles;
  });
};

export const fetchTopics = () => { 
    return ncNewsBackend.get("/topics")
        .then((response) => {
        return response.data.topics;
    });
}
