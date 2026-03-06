const express = require('express');
const router = express.Router();
const upload = require("../middleware/upload.middleware")
const SongController = require("../controllers/song.controller");
/**
 * @route POST /api/songs
 */
router.post("/",upload.single("song"),SongController.uploadSong)

router.get("/",SongController.getSong)

module.exports = router;