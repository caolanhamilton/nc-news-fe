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

export const fetchArticleById = (articleID) => { 
    return ncNewsBackend.get(`/articles/${articleID}`)
        .then((response) => {
        return response.data.articleObj;
    });
}

export const patchArticleVotesById = (articleID, num) => {
    return ncNewsBackend.patch(`/articles/${articleID}`, {inc_votes : num})
        .then((response) => {
        return response.data.votes;
    });
}

export const fetchCommentsByArticleId = (articleID) => { 
    return ncNewsBackend.get(`/articles/${articleID}/comments`)
        .then((response) => { 
        return response.data.comments;
        })
}

export const postComment = (username, body, articleID) => { 
    return ncNewsBackend.post(`/articles/${articleID}/comments`, {'username': username, 'body': body})
}


