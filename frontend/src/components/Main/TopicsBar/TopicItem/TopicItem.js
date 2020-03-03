import React from "react";
import { Link } from "react-router-dom";

const TopicItem = ({ topicId }) => {
  return (
    <div className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        {/* on click go to backend and set the current topic */}
        <Link to={`/topic/${topicId}`}>
          <h5 className="mb-1">{topicId}</h5>
        </Link>

        <small>(3 days ago)</small>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </p>
    </div>
  );
};

export default TopicItem;
