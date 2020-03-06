import React from "react";
import "./TopicItem.css";
import { withRouter } from "react-router-dom";
import { timeElapsed } from "../../../../utils/utils";

const TopicItem = ({ name, history, createdAt }) => {
  const handleClick = () => {
    history.push(`/topic/${name}`);
  };

  return (
    <div className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <div onClick={() => handleClick()}>
          <h5 className="mb-1 topic-item-link">/{name}</h5>
        </div>

        <small>{timeElapsed(createdAt)} ago</small>
      </div>
    </div>
  );
};

export default withRouter(TopicItem);
