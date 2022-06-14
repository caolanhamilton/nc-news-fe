import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchArticleById } from "../Utils/ApiCalls";
import { getTimeDate } from "../Utils/getTimeDate";

export const SingleArticle = () => {
  const { articleID } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchArticleById(articleID).then((article) => {
      setArticle(article);
      setLoading(false);
    })
      .catch((err) => { 
        setError(true);
        setLoading(false);
      });
  }, [articleID]);

  if (loading) return <p>Loading article...</p>;
  if (error) return (
    <h2>
      Error loading article... <span aria-hidden="true">😢</span>
    </h2>
  );

  return (
    <>
      <h2 className="singleArticleTitle">{article.title}</h2>
      <h3 className="singleArticleByline">
        by {article.author} @ {getTimeDate(article.created_at)}
      </h3>
      <article className="singleArticleBody">{article.body}</article>
      <h4 className="singleArticleStats">
        Votes: {article.votes} Comments:{article.comment_count}
      </h4>
    </>
  );
};
