import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/User";
import { postComment } from "../Utils/ApiCalls";

export const NewComment = ({ articleID }) => {
  const { username } = useContext(UserContext);
  const [commentText, setCommentText] = useState("");
  const [postBtnDisabled, setPostBtnDisabled] = useState(false);
  const [postBtnText, setPostBtnText] = useState("Post");
  const [postSuccess, setPostSuccess] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setCommentText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostBtnDisabled(true);
    setPostBtnText("Posting...");
    postComment(username, commentText, articleID)
      .then(() => {
        setPostBtnDisabled(false);
          setPostBtnText("Post");
          setPostSuccess(true);
      })
      .catch((err) => {
        setPostBtnDisabled(false);
          setPostBtnText("Post");
          setPostSuccess(false);
      });
    setCommentText("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={commentText}
          onChange={handleChange}
          placeholder="Type a comment..."
          className="commentInput"
          required
        ></input>
        <button className="postButton" disabled={postBtnDisabled}>
          {postBtnText}
        </button>
      </form>
      {postSuccess ? (
        <p>Comment posted!</p>
      ) : (
        <p>You have not posted a comment.</p>
      )}
    </>
  );
};
