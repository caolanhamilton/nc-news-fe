import { fetchArticles } from "../Utils/ApiCalls";
import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";

export const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchArticles()
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <h2>Error loading articles... 😢</h2>;

  return (
    <>
      <h2 className="articleTopicSubHeading">All Articles</h2>
      <ul className="articlesList">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};
