import React, { useEffect, useState } from "react";
import "./TopicPage.css";
import axios from "axios";
import SideBar from "./SideBar/SideBar";
import Comment from "./Comment/Comment";
import { pluckTopic } from "../../utils/utils";
import { socket } from "../../context/Provider";

const TopicPage = ({
  history: {
    location: { pathname }
  }
}) => {
  const topic = pluckTopic(pathname);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/topics/${topic}/comments`)
      .then(res => setComments(res.data));
  }, [topic]);

  useEffect(() => {
    socket.on("comment added", () => {
      axios
        .get(`http://localhost:5000/topics/${topic}/comments`)
        .then(res => setComments(res.data));
    });
    socket.on("votes updated", () => {
      axios
        .get(`http://localhost:5000/topics/${topic}/comments`)
        .then(res => setComments(res.data));
    });
  });

  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-4 topic-jumbo"> Welcome to {`/${topic}`}</h1>
      </div>
      <div className="topic">
        <div className="topic-left">
          <div className="list-group topic-left">
            <span className="list-group-item list-group-item-info">
              Recent Comments
            </span>
          </div>

          <div
            className={`${
              comments.length ? "card" : ""
            } list-group list-group-flush topic-left`}
          >
            {comments.length
              ? comments.map(comment => (
                  <Comment key={comment._id} {...comment} />
                ))
              : null}
          </div>
        </div>

        <div className="topic-right">
          <SideBar topic={topic} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopicPage;
