const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Please provide the song url"],
  },
  posterUrl: {
    type: String,
    required: [true, "Please provide the song poster url"],
  },
  title: {
    type: String,
    required: [true, "Please provide the song title"],
  },
  mood: {
    type: String,
    enum: {
      values: ["happy", "sad", "surprised"],
      message:"Enum this is"
    },
  },
});

const songModel = mongoose.model("songs", songSchema);

module.exports = songModel;
