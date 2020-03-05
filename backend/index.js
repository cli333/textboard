const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const api = require("./routes/api");

const Comment = require("./models/comment.model");
const app = express();
const port = process.env.PORT || 5000;

const http = require("http").createServer(app);
const io = require("socket.io")(http);

require("dotenv").config();

io.on("connection", socket => {
  console.log(`Connected to Socket! ${socket.id}`);
  socket.on("disconnect", () => {
    console.log("Disconnected!");
  });

  socket.on("votes updated", response => {
    const { votes, _id } = response;
    Comment.findById(_id).then(comment => {
      comment.votes = votes;
      comment.save().then(() => {
        io.emit("votes updated");
      });
    });
  });
});
//

app.use(cors());
app.use(express.json());
app.use("/", api);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`MongoDB database connection established`);
});

http.listen(port, () => console.log(`Server is listening on port ${port}`));
