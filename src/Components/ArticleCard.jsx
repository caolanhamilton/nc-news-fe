export const ArticleCard = ({ article }) => {
  return (
    <>
      <li className="articleCard" key={article.id}>
        <h3 className="articleCardTitle">{article.title}</h3>
        <h4 className="articleCardAuthor">Post by {article.author}</h4>
        <p className="articleCardCommentCount">
          Comment count: {article.comment_count}
        </p>
        <p className="articleCardTopic">Topic: {article.topic}</p>
      </li>
    </>
  );
};
