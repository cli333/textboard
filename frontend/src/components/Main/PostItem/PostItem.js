import React from "react";
import "./PostItem.css";

const PostItem = () => {
  return (
    <div className="post-item list-group">
      <div className="list-group-item post-item-wrapper">
        <div className="post-item-votes">
          <div className="post-item-votes-item">⬆</div>
          <div className="post-item-votes-item">#votes</div>
          <div className="post-item-votes-item">⬇</div>
        </div>
        <div className="post-item-right">
          <div className="post-item-header">
            <span>(the topic)</span> • <span>(3 days ago)</span>
          </div>
          <div className="post-item-link">
            Post title 'this link goes to the topic / post'
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
