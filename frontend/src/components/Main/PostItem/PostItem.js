import React, { useContext } from "react";
import "./PostItem.css";
import { context } from "../../../context/Provider";
import { withRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { timeElapsed } from "../../../utils/utils";

const PostItem = ({ votes, topicName, text, createdAt, _id }) => {
  const { socket } = useContext(context);
  const handleClick = type => {
    let newVotes = votes;
    if (type === "up") newVotes++;
    if (type === "down") newVotes--;

    socket.emit("votes updated", { votes: newVotes, _id });
  };

  return (
    <div className="post-item list-group">
      <div className="list-group-item post-item-wrapper">
        <div className="post-item-votes">
          <div
            className="post-item-votes-item up"
            onClick={() => handleClick("up")}
          >
            ⬆
          </div>
          <div className="post-item-votes-item">{votes}</div>
          <div
            className="post-item-votes-item down"
            onClick={() => handleClick("down")}
          >
            ⬇
          </div>
        </div>
        <div className="post-item-right">
          <div className="post-item-header">
            <Link
              style={{ textDecoration: "none", color: "blue" }}
              to={`/topic/${topicName}`}
            >{`/${topicName}`}</Link>{" "}
            <span>{timeElapsed(createdAt)} ago</span>
          </div>
          <HashLink
            to={`/topic/${topicName}#${_id}`}
            className="post-item-link"
            style={{ textDecoration: "none", color: "black" }}
          >
            {text}
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PostItem);
