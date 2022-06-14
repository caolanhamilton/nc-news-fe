import {fetchArticles} from '../Utils/ApiCalls';
import { useEffect, useState } from 'react';
import { ArticleCard } from './ArticleCard';

export const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchArticles().then((fetchedArticles) => {
            setArticles(fetchedArticles);
            setLoading(false);
        })
    }, [])
    
    if (loading) return <p>Loading articles...</p>
    
  return (
    <>
      <h2 className="articleTopicSubHeading">All Articles</h2>
      <ul className="articlesList">
        {articles.map((article) => {
          console.log(article);
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};
