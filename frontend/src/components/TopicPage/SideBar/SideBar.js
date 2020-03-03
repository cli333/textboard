import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="list-group">
      <div className="list-group-item">
        <h5 className="mb-1">About (this Topic)</h5>
      </div>
      <div className="list-group-item">
        <p className="mb-1">(/topic/Topic) is the place to discuss (Topic)</p>
        <hr />
        <div className="d-flex w-100 justify-content-around">
          <small>Created:</small>
          <small>Posts:</small>
        </div>
        <div className="d-flex w-100 justify-content-around">
          <small className="sidebar-item">(some days ago)</small>
          <small className="sidebar-item">(how many posts)</small>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
