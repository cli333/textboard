import React, { useEffect, useState } from "react";
import "./TopicsBar.css";
import axios from "axios";
import TopicItem from "./TopicItem/TopicItem";

const TopicsBar = () => {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // fetch 5 topics with the most comments
    axios.get("http://localhost:5000/topics").then(res => setTopics(res.data));
  }, []);

  const handleSubmit = e => {
    // do some topic validation here
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    axios
      .post("http://localhost:5000/topics/new", { name })
      .then(() => {
        setName("");
        setIsSubmitting(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <div className="list-group topicsbar-item">
        <span className="list-group-item list-group-item-danger">
          Popular Topics
        </span>
        {/* change the topicId later*/}
        {topics.map((topic, index) => (
          <TopicItem key={`${topic.name} ${index}`} {...topic} />
        ))}
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

export default TopicsBar;
