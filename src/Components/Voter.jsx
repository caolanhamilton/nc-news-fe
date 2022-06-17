import { patchArticleVotesById } from "../Utils/ApiCalls";
import { useState } from "react";

export const Voter = ({ articleID, setVote, setArticleVotingError }) => {
    const [disableUpVoteBtn, setDisableUpVoteBtn] = useState(false);
     const [disableDownVoteBtn, setDisableDownVoteBtn] = useState(false);

  const handleUpVoteClick = () => {
    setVote((currVote) => currVote + 1);
      setDisableUpVoteBtn(true);
      setDisableDownVoteBtn(false)
    patchArticleVotesById(articleID, 1).catch((err) => {
      setArticleVotingError(true);
      setDisableUpVoteBtn(false);
      setVote((currCount) => currCount - 1);
    });
  };

  const handleDownVoteClick = () => {
    setVote((currVote) => currVote - 1);
      setDisableDownVoteBtn(true);
      setDisableUpVoteBtn(false);
    patchArticleVotesById(articleID, -1).catch((err) => {
      setDisableDownVoteBtn(false);
      setArticleVotingError(true);
      setVote((currCount) => currCount + 1);
    });
  };

  return (
    <>
      <button
        className="articleVoteBtn"
        onClick={handleUpVoteClick}
        disabled={disableUpVoteBtn}
      >
        <span className="material-symbols-outlined">thumb_up</span>
      </button>
      <button
        className="articleVoteBtn"
        onClick={handleDownVoteClick}
        disabled={disableDownVoteBtn}
      >
        <span className="material-symbols-outlined">thumb_down</span>
      </button>
    </>
  );
};
