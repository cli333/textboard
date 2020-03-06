import React, { useEffect, useState, useContext } from "react";
import "./SideBar.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { context } from "../../../context/Provider";

const SideBar = ({ topic }) => {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { socket } = useContext(context);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/topics/${topic}`)
      .then(res => setCurrentTopic(res.data));
  }, [topic]);

  useEffect(() => {
    socket.on("comment added", () => {
      axios
        .get(`http://localhost:5000/topics/${topic}`)
        .then(res => setCurrentTopic(res.data));
    });
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    const newComment = {
      topicId: currentTopic._id,
      topicName: currentTopic.name,
      text
    };
    axios
      .post("http://localhost:5000/comments/new", newComment)
      .then(() => {
        setIsLoading(false);
        setText("");
        socket.emit("comment added");
      })
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <div className="list-group">
        <div className="list-group-item list-group-item-primary">
          <h5 className="mb-1">About {`/${topic}`}</h5>
        </div>
        <div className="list-group-item">
          <p className="mb-1">
            The best place to discuss <em>{`${topic}`}</em>!
          </p>
          <hr />
          <div className="d-flex w-100 justify-content-around">
            <small>Created:</small>
            <small>Comments:</small>
          </div>
          <div className="d-flex w-100 justify-content-around">
            <small className="sidebar-item">
              {currentTopic && new Date(currentTopic.createdAt).toDateString()}
            </small>
            <small className="sidebar-item">
              {currentTopic && `${currentTopic.commentCount} comments`}
            </small>
          </div>
        </div>
      </div>

      <div className="card sidebar-form">
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group sidebar-form-group">
            <textarea
              type="text"
              className="form-control sidebar-form-input"
              placeholder="Submit a comment"
              value={text}
              onChange={e => setText(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary sidebar-form-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default withRouter(SideBar);
