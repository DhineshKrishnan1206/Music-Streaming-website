const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    song_Url: {
      type: String,
      required: true,
    },
    comment_text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
