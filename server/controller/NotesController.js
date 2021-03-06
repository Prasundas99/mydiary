import Mongoose from "mongoose";
import Note from "../models/notesModel.js";
import { v4 as uuidv4 } from "uuid";
import user from "../models/userModel.js";

// @route: GET users/notes
//@puropose : get all notes from db for single user
export const getNotes = async (req, res, next) => {
  try {
    const notefetch = await Note.find({ username: req.user._id }).populate(
      "username"
    );
    res.status(200).json(notefetch);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

//@route: POST users/notes
//@purpose: : Post new note by user
export const postNotes = async (req, res, next) => {
  const User = await user.findOne({ _id: req.user._id });
  var { title, body } = req.body;
  console.log(req.body);
    
  const accessToken = uuidv4();

  const newpost = {
    title: title,
    body: body,
    username: User._id,
    accessToken: accessToken,
    isValid: true,
  };

  var newNotes = new Note(newpost);
  try {
    console.log(req.body);
    await newNotes.save();
    res.status(201).json(newNotes);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
//@route: GET users/notes/:id
//@purpose: get details for update 
export const getUpdateNotes = async (req, res, next) => {
  const { id: id } = req.params;
  try {
    const updateExistingNotes = await Note.findById(id)
    res.status(200).json(updateExistingNotes);
  } catch (error) {
    res.status(404);
    next(error);
  } 
};

// @route: PATCH users/notes/:id
// @purpose: PATCH or update the notes
export const patchNotes = async (req, res) => {
  const { id: id } = req.params;
  const post = req.body;

  if (!Mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that is Found");

  const updateNotes = await Note.findByIdAndUpdate(id, post, 
    {
    new: true,
  });
  res.json(updateNotes);
};

// @route: DELETE usera/notes/id
export const deleteNotes = async (req, res) => {
  try {
    const deleteusernote = await Note.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(deleteusernote);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
