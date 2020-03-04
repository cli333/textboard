import React from "react";
import "./PostItem.css";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { timeElapsed } from "../../../utils/utils";

const PostItem = ({
  votes,
  topicName,
  text,
  createdAt,
  _id,
  history,
  location
}) => {
  const handleClick = type => {
    if (type === "up") votes++;
    if (type === "down") votes--;
    axios
      .post(`http://localhost:5000/comments/update/${_id}`, { votes })
      .then(() => {
        // reload
        // history.replace(`/reload`);
        // setTimeout(() => {
        //   history.replace(location.pathname);
        // });
      });
  };

  return (
    <div className="post-item list-group">
      <div className="list-group-item post-item-wrapper">
        <div className="post-item-votes">
          <div
            name="up"
            className="post-item-votes-item up"
            onClick={() => handleClick("up")}
          >
            ⬆
          </div>
          <div className="post-item-votes-item">{votes}</div>
          <div
            name="down"
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
