import React from "react";
import "./PostItem.css";
import { timeElapsed } from "../../../utils/utils";

const PostItem = ({ votes, topicName, text, createdAt }) => {
  return (
    <div className="post-item list-group">
      <div className="list-group-item post-item-wrapper">
        <div className="post-item-votes">
          <div className="post-item-votes-item">⬆</div>
          <div className="post-item-votes-item">{votes}</div>
          <div className="post-item-votes-item">⬇</div>
        </div>
        <div className="post-item-right">
          <div className="post-item-header">
            <span>{`/${topicName}`}</span> •{" "}
            <span>{timeElapsed(createdAt)}</span>
          </div>
          <div className="post-item-link">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
