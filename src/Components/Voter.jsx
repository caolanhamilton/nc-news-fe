import { patchArticleVotesById } from "../Utils/ApiCalls";
import { useState } from "react";

export const Voter = ({ articleID, setVote, setArticleVotingError }) => {
  const [disableVoteBtn, setDisableVoteBtn] = useState(false);

  const handleUpVoteClick = () => {
    setVote((currVote) => currVote + 1);
    setDisableVoteBtn(true);
    patchArticleVotesById(articleID, 1).catch((err) => {
      setArticleVotingError(true);
      setDisableVoteBtn(false);
      setVote((currCount) => currCount - 1);
    });
  };

  const handleDownVoteClick = () => {
    setVote((currVote) => currVote - 1);
    setDisableVoteBtn(true);
    patchArticleVotesById(articleID, -1).catch((err) => {
      setDisableVoteBtn(false);
      setArticleVotingError(true);
      setVote((currCount) => currCount + 1);
    });
  };

  return (
    <>
      <button
        className="articleVoteBtn"
        onClick={handleUpVoteClick}
        disabled={disableVoteBtn}
      >
        Up vote
      </button>
      <button
        className="articleVoteBtn"
        onClick={handleDownVoteClick}
        disabled={disableVoteBtn}
      >
        Down vote
      </button>
    </>
  );
};
