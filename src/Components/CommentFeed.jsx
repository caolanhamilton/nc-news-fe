import { fetchCommentsByArticleId } from "../Utils/ApiCalls";
import { useState, useEffect } from "react";
import { CommentCard } from "./CommentCard";

export const CommentFeed = ({ articleID }) => {
  const [commentsArr, setCommentFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCommentsByArticleId(articleID)
      .then((comments) => {
        setCommentFeed(comments);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  });

  if (loading) return <p>Loading comments...</p>;

  return (
    <>
      <h2 className="commentsSectionTitle">Comments</h2>
      <ul className="commentCardList">
        {commentsArr.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              className="commentCard"
            ></CommentCard>
          );
        })}
      </ul>
    </>
  );
};
