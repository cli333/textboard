import React from "react";
import "./MainPage.css";
import TopicsBar from "../TopicsBar/TopicsBar";
import PostItem from "../PostItem/PostItem";

const dummyPosts = [
  {
    topicTitle: "this is a topic title",
    createdAt: "some time ago",
    comments: 30
  },
  {
    topicTitle: "this is a topic title",
    createdAt: "some time ago",
    comments: 30
  },
  {
    topicTitle: "this is a topic title",
    createdAt: "some time ago",
    comments: 30
  }
];

const MainPage = () => {
  return (
    <div className="container main">
      <div className="main-left">
        <div className="list-group main-left-header">
          <span className="list-group-item">Recent Posts</span>
        </div>
        {dummyPosts.map((post, index) => (
          <PostItem key={`${post.topicTitle} ${index}`} />
        ))}
      </div>

      <div className="main-right">
        <TopicsBar />
      </div>
    </div>
  );
};

export default MainPage;
