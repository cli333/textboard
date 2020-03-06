import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

export const context = createContext();

let socket;

const Provider = ({ children }) => {
  socket = io("http://localhost:5000/");
  const [commentsFilter, setCommentsFilter] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/comments")
      .then(res => setComments(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    socket.on("votes updated", () => {
      axios
        .get("http://localhost:5000/comments")
        .then(res => setComments(res.data))
        .catch(err => console.log(err));
    });
  });

  useEffect(() => {
    socket.on("comment added", () => {
      axios
        .get("http://localhost:5000/comments")
        .then(res => setComments(res.data))
        .catch(err => console.log(err));
    });
  });

  return (
    <context.Provider
      value={{
        socket,
        commentsFilter,
        setCommentsFilter,
        comments,
        setComments
      }}
    >
      {children}
    </context.Provider>
  );
};

export { socket };
export default Provider;
