import { Link } from "react-router-dom";
import { getTimeDate } from "../Utils/getTimeDate";

export const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`} className="articleCard">
        <h3 className="articleCardTitle">{article.title}</h3>
        <h4 className="articleCardAuthor">Post by {article.author}</h4>
        <p className="articleCardCommentCount">
          Comment count: {article.comment_count}
      </p>
      <p>Votes: {article.votes}</p>
      <p className="articleCardTopic">Topic: {article.topic}</p>
      <p>Created at {getTimeDate(article.created_at)}</p>
    </Link>
  );
};
