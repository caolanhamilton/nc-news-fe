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
          <h2>All Articles</h2>
          <ul className='articlesList'>
              {articles.map((article) => { 
                    return (
                        <ArticleCard article={article} />
                    )
              })}
          </ul>
    </>
  );
};
