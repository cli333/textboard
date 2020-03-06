import React, { useEffect, useState } from "react";
import "./TopicsBar.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import TopicItem from "./TopicItem/TopicItem";

const TopicsBar = ({ history }) => {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/topics").then(res => setTopics(res.data));
  }, []);

  const handleSubmit = e => {
    if (name.length < 5) {
      setName("Name must be at least ");
    }
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    axios
      .post("http://localhost:5000/topics/new", { name })
      .then(() => {
        history.push(`/topic/${name}`);
        setName("");
        setIsSubmitting(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <div className="list-group topicsbar-top">
        <span className="list-group-item list-group-item-danger">Topics</span>
        <div className="topicsbar-scroll border rounded-lg">
          {topics.map((topic, index) => (
            <TopicItem key={`${topic.name} ${index}`} {...topic} />
          ))}
        </div>
      </div>

      <form className="input-group mb-3" onSubmit={e => handleSubmit(e)}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Topic name"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary topicsbar-button"
            disabled={isSubmitting}
          >
            {!isSubmitting ? (
              "New Topic"
            ) : (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default withRouter(TopicsBar);
