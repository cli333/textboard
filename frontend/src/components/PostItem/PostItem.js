import React from "react";
import "./PostItem.css";

const PostItem = () => {
  return (
    <div className="post-item list-group">
      <div className="list-group-item post-item-wrapper">
        <div className="post-item-votes">
          <i data-feather="circle"></i>
          <div>⬆</div>
          <div>#votes</div>
          <div>⬇</div>
        </div>
        <div>
          <div className="post-item-header">
            <span>(the topic)</span> • <span>Posted by: (author)</span> •{" "}
            <span>(3 days ago)</span>
          </div>
          <div className="post-item-link">Post title 'this is a link'</div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
