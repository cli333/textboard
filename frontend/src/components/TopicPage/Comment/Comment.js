import React from "react";
import "./Comment.css";

const Comment = ({ children }) => {
  const displayChildren = () => {
    if (children) {
      return children.map(child => <Comment />);
    }
  };
  return (
    <div className="list-group-item comment">
      <div className="comment-left">
        <div className="comment-left-item">⬆</div>
        <div className="comment-left-item">#votes</div>
        <div className="comment-left-item">⬇</div>
      </div>
      <div className="comment-right">
        <div className="comment-header">
          <span>(the topic)</span> • <span>(3 days ago)</span>
        </div>
        <div className="comment-link">
          (the comment goes here)
          {children && (
            <div className="comment-children">{displayChildren()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
