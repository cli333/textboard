import React, { useContext } from "react";
import "./Comment.css";
import { timeElapsed } from "../../../utils/utils";
import { context } from "../../../context/Provider";

const Comment = ({ votes, text, createdAt, _id }) => {
  const { socket } = useContext(context);

  const handleClick = type => {
    let newVotes = votes;
    if (type === "up") newVotes++;
    if (type === "down") newVotes--;

    socket.emit("votes updated", { votes: newVotes, _id });
  };

  return (
    <div className="list-group-item comment" id={_id}>
      <div className="comment-left">
        <div className="comment-left-item up" onClick={() => handleClick("up")}>
          ⬆
        </div>
        <div className="comment-left-item">{votes}</div>
        <div
          className="comment-left-item down"
          onClick={() => handleClick("down")}
        >
          ⬇
        </div>
      </div>
      <div className="comment-right">
        <div className="comment-header">
          <span>{timeElapsed(createdAt)} ago</span>
        </div>
        <div className="comment-right-body">{text}</div>
      </div>
    </div>
  );
};

export default Comment;
