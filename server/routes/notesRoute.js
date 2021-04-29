const express = require('express')
const router = express.Router();

import {
    getNotes,
    postNotess,
    putNotess,
    deleteNotes,
  } from "../controller/NotesController.js";

