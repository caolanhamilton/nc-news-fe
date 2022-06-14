import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchArticles } from "../Utils/ApiCalls";
import { ArticleCard } from "./ArticleCard";

export const ArticlesByTopic = () => { 
    const { topic } = useParams();
    const [articlesInTopic, setArticlesInTopic] = useState([]);

    useEffect(() => {
        fetchArticles(topic).then((articlesInTopic) => {
            setArticlesInTopic(articlesInTopic);
        })
    }, [topic])

    if (articlesInTopic.length === 0) return <p>Loading articles...</p>;

    console.log(topic)
    return (
      <>
        <h2 className="articleTopicSubHeading">Articles about {topic}</h2>
        <ul className="articlesList">
          {articlesInTopic.map((article) => {
            return <ArticleCard article={article} />;
          })}
        </ul>
      </>
    );
}