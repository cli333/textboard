import React from "react";
import TopicItem from "./TopicItem/TopicItem";

const TopicsBar = () => {
  return (
    <div className="list-group">
      <TopicItem topicId="cats" />
      <TopicItem topicId="dogs" />
      <TopicItem topicId="coding" />
    </div>
  );
};

export default TopicsBar;
