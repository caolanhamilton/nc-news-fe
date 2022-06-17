import { getTimeDate } from "../Utils/getTimeDate";
import { useContext } from "react";
import { UserContext } from "../Contexts/User";
import { deleteComment } from "../Utils/ApiCalls";
import { useState } from "react";

export const CommentCard = ({ comment }) => {
  const { username } = useContext(UserContext);
  const [deleteBtnDisabled, setDeleteBtnDisabled] = useState(false);
  const handleClick = () => {
    setDeleteBtnDisabled(true);
    deleteComment(comment.comment_id)
      .then(() => {
        alert("Comment deleted!");
        setDeleteBtnDisabled(false);
      })
      .catch(() => {
        alert("Error deleting comment, please try again later.");
        setDeleteBtnDisabled(false);
      });
  };
  return (
    <li className="commentCard">
      <h3 className="commentCardAuthor">{`Posted by: ${comment.author}`}</h3>
      <h4 className="commentCardTime">{`@ ${getTimeDate(
        comment.created_at
      )}`}</h4>
      <p className="commentCardBody">{comment.body}</p>
      <div className="commentCardVotes">
        <span className="material-symbols-outlined">thumbs_up_down</span>
        {comment.votes}
      </div>
      {username === comment.author && (
        <button
          className="deleteCommentBtn"
          onClick={handleClick}
          disabled={deleteBtnDisabled}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      )}
    </li>
  );
};
