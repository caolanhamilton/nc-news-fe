import { Link } from "react-router-dom";
import { getTimeDate } from "../Utils/getTimeDate";

export const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`} className="articleCard">
      <h3 className="articleCardTitle">{article.title}</h3>
      <h4 className="articleCardAuthor">
        {article.author} @ {getTimeDate(article.created_at)}
      </h4>
      <section className="articleCardStats">
        <div className="commentCountContainer">
          <span className="material-symbols-outlined">comment</span>
        {article.comment_count}
        </div>
        <div className="votesCountContainer">
          <span className="material-symbols-outlined">thumbs_up_down</span>
        {article.votes}
        </div>
      </section>
      <p className="articleCardTopic">{article.topic.toUpperCase()}</p>
    </Link>
  );
};
