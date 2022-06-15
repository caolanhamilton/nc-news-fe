import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchArticles } from "../Utils/ApiCalls";
import { ArticleCard } from "./ArticleCard";
import { ArticleSorter } from "./ArticleSorter";
import { Error } from "./Error";

export const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [articlesInTopic, setArticlesInTopic] = useState([]);
   const [sortOrder, setSortOrder] = useState("desc");
   const [sortParameter, setSortParameter] = useState("created_at");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchArticles(topic, sortOrder, sortParameter).then((articlesInTopic) => {
      setArticlesInTopic(articlesInTopic);
      setLoading(false);
    }).catch((err) => {
      setError(err);
      setLoading(false);
    });
  }, [topic, sortOrder, sortParameter]);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <Error error={error}></Error>;

  return (
    <>
      <h2 className="articleTopicSubHeading">Articles about {topic}</h2>
      <ArticleSorter
        setSortOrder={setSortOrder}
        setSortParameter={setSortParameter}
      ></ArticleSorter>
      <ul className="articlesList">
        {articlesInTopic.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};
