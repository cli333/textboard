import React, { useState, useContext } from "react";
import "./MainPage.css";
import { context } from "../../context/Provider";
import TopicsBar from "./TopicsBar/TopicsBar";
import PostItem from "./PostItem/PostItem";

const MainPage = () => {
  const { commentsFilter, setCommentsFilter, comments } = useContext(context);
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
    setCommentsFilter(e.target.value);
  };

  const displayComments = () => {
    return comments
      .filter(comment => {
        let topicMatch = comment.topicName
          .toLowerCase()
          .includes(commentsFilter.toLowerCase());
        let textMatch = comment.text
          .toLowerCase()
          .includes(commentsFilter.toLowerCase());
        return topicMatch || textMatch;
      })
      .map(comment => <PostItem key={comment._id} {...comment} />);
  };

  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-4 topic-jumbo"> Welcome to TextBoard</h1>
      </div>
      <div className="main">
        <div className="main-left">
          <div className="list-group main-left-header">
            <span className="list-group-item list-group-item-info">
              <div>Recent Comments</div>
              <div></div>
              <input
                className="form-control mr-sm-2 form-control-sm"
                type="search"
                placeholder="Search"
                value={text}
                onChange={e => handleChange(e)}
              />
            </span>
          </div>
          {comments.length ? displayComments() : null}
        </div>

        <div className="main-right">
          <TopicsBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
