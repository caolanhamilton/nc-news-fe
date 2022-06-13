import {fetchAllArticles} from '../Utils/ApiCalls';
import { useEffect, useState } from 'react';

export const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchAllArticles().then((fetchedArticles) => {
            setArticles(fetchedArticles);
            setLoading(false);
        })
    }, [])
    
    if (loading) return <p>Loading articles...</p>
    console.log(articles)
    
  return (
    <>
          <h2>All Articles</h2>
          <ul className='articlesList'>
              {articles.map((article) => { 
                    return (
                        <li className='articleCard' key={article.id}>
                            <h3 className='articleCardTitle'>{article.title}</h3>
                            <h4 className='articleCardAuthor'>Post by {article.author}</h4>
                            <p className='articleCardCommentCount'>Comment count: {article.comment_count}</p>
                            <p className='articleCardTopic'>Topic: {article.topic}</p>
                        </li>
                    )
              })}
          </ul>
    </>
  );
};
