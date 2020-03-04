import React, { useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";
import TopicsBar from "./TopicsBar/TopicsBar";
import PostItem from "./PostItem/PostItem";

const MainPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/comments")
      .then(res => setComments(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-4 topic-jumbo"> Welcome to TextBoard</h1>
      </div>
      <div className="main">
        <div className="main-left">
          <div className="list-group main-left-header">
            <span className="list-group-item list-group-item-info">
              Recent Comments
            </span>
          </div>
          {comments.length &&
            comments.map(comment => (
              <PostItem key={comment._id} {...comment} />
            ))}
        </div>

        <div className="main-right">
          <TopicsBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
