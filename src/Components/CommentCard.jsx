import { getTimeDate } from "../Utils/getTimeDate";

export const CommentCard = ({ comment }) => {
  return (
    <li className="commentCard">
      <h3 className="commentCardAuthor">{`Posted by: ${comment.author}`}</h3>
      <h4 className="commentCardTime">{`@ ${getTimeDate(comment.created_at)}`}</h4>
      <p className="commentCardBody">{comment.body}</p>
      <h4 className="commentCardVotes">{`Votes: ${comment.votes}`}</h4>
    </li>
  );
};
