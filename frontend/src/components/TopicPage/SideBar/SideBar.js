import React, { useEffect, useState } from "react";
import "./SideBar.css";
import axios from "axios";

const SideBar = ({ topic }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/topics/${topic}`)
      .then(res => setState(res.data));
  }, []);

  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-primary">
        <h5 className="mb-1">About {`/${topic}`}</h5>
      </div>
      <div className="list-group-item">
        <p className="mb-1">
          The best place to discuss <em>{`${topic}!`}</em>
        </p>
        <hr />
        <div className="d-flex w-100 justify-content-around">
          <small>Created:</small>
          <small>Comments:</small>
        </div>
        <div className="d-flex w-100 justify-content-around">
          <small className="sidebar-item">
            {state && new Date(state.createdAt).toDateString()}
          </small>
          <small className="sidebar-item">
            {state && `${state.commentCount} comments`}
          </small>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
