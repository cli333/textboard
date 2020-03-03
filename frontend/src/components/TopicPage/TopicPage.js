import React, { useEffect } from "react";
import "./TopicPage.css";
import SideBar from "./SideBar/SideBar";
import Comment from "./Comment/Comment";
import { pluckTopic } from "../../utils/utils";

const TopicPage = ({
  history: {
    location: { pathname }
  }
}) => {
  const topic = pluckTopic(pathname);

  useEffect(() => {
    // fetch the topic comment from backend
    // when a submit action, refetch the current topic
  }, []);

  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-4 topic-jumbo"> Welcome to {`/${topic}`}</h1>
      </div>
      <div className="topic">
        <div className="topic-left">
          <div className="list-group topic-left">
            <span className="list-group-item list-group-item-dark">
              Recent Comments
            </span>
          </div>

          <div className="card list-group list-group-flush topic-left">
            <Comment children={[1, 2, 3]} />
            <Comment />
          </div>
        </div>

        <div className="topic-right">
          <SideBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopicPage;
