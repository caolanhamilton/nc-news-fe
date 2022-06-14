import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchArticleById } from "../Utils/ApiCalls";
import { getTimeDate } from "../Utils/getTimeDate";
import { Voter } from "./Voter";
import { CommentFeed } from "./CommentFeed";


export const SingleArticle = () => {
  const { articleID } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articleLoadingError, setArticleLoadingError] = useState(false);
  const [articleVotingError, setArticleVotingError] = useState(false);
  const [vote, setVote] = useState(article.vote);

  useEffect(() => {
    fetchArticleById(articleID).then((article) => {
      setArticle(article);
      setVote(article.votes);
      setLoading(false);
    })
      .catch((err) => {
        setArticleLoadingError(true);
        setLoading(false);
      });
  }, [articleID]);


  if (loading) return <p>Loading article...</p>;
  if (articleLoadingError) return (
    <h2>
      Error loading article... <span aria-hidden="true">😢</span>
    </h2>
  );

  return (
    <>
      <h2 className="singleArticleTitle">{article.title}</h2>
      <article className="singleArticleBody">{article.body}</article>
      <h3 className="singleArticleByline">
        by {article.author} @ {getTimeDate(article.created_at)}
      </h3>
      <h4 className="singleArticleStats">
        Votes: {articleVotingError ? "Vote could not be sent" : vote} Comments:
        {article.comment_count}
      </h4>
      <Voter
        articleID={articleID}
        setVote={setVote}
        setArticleVotingError={setArticleVotingError}
      ></Voter>
      <CommentFeed articleID={articleID}></CommentFeed>
    </>
  );
};
