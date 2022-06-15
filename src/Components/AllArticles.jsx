import { fetchArticles } from "../Utils/ApiCalls";
import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { ArticleSorter } from "./ArticleSorter";
import { Error } from "./Error";

export const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortParameter, setSortParameter] = useState("created_at");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchArticles(false, sortOrder, sortParameter)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [sortOrder, sortParameter]);

  if (loading) return <p>Loading articles...</p>;
  if (error) return (
   <Error error={error}></Error>
  );

  return (
    <>
      <h2 className="articleTopicSubHeading">All Articles</h2>
      <ArticleSorter
        setSortOrder={setSortOrder}
        setSortParameter={setSortParameter}
      ></ArticleSorter>
      <ul className="articlesList">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};
