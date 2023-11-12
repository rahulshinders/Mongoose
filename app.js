const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myDB");
    console.log("Connected successfully!");
  } catch (error) {
    console.error("Connection error:", error);
  }
})();

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "Rahul Shinde",
      course: "Full-Stack Development",
      videos: 25,
      author: "Rahul Shinde",
      active: true,
    });
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
