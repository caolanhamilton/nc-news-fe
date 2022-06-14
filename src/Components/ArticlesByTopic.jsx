import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchArticles } from "../Utils/ApiCalls";
import { ArticleCard } from "./ArticleCard";

export const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [articlesInTopic, setArticlesInTopic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchArticles(topic).then((articlesInTopic) => {
      setArticlesInTopic(articlesInTopic);
      setLoading(false);
    }).catch(() => {
      setError(true);
      setLoading(false);
    });
  }, [topic]);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <h2>Error loading articles... 😢</h2>;

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
};
