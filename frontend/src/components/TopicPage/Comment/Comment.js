import React, { useState } from "react";
import "./Comment.css";
import { timeElapsed } from "../../../utils/utils";

const Comment = ({ votes, text, createdAt }) => {
  const [isFormShown, setIsFormShown] = useState(false);

  return (
    <div className="list-group-item comment">
      <div className="comment-left">
        <div className="comment-left-item">⬆</div>
        <div className="comment-left-item">{votes}</div>
        <div className="comment-left-item">⬇</div>
      </div>
      <div className="comment-right">
        <div className="comment-header">
          <span>{timeElapsed(createdAt)} ago</span>
        </div>
        <div className="comment-right-body">
          {text}
          {!isFormShown && (
            <div
              className="comment-right-body-button"
              onClick={() => setIsFormShown(true)}
            >
              <button className="btn btn-outline-primary">Reply</button>
            </div>
          )}
          {isFormShown && (
            <form className="comment-right-body-form">
              <div className="form-group">
                <textarea type="text" className="form-control"></textarea>
              </div>
              <div className="btn-group">
                <div
                  className="btn btn-outline-danger"
                  onClick={() => setIsFormShown(false)}
                >
                  Close
                </div>
                <button className="btn btn-outline-success">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
