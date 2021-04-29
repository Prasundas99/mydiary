import Note from '../models/notesModel.js';

// @route: GET/notes
//@puropose : get all notes from db
export const getNotes = async (req, res) => {
    try {
        const notefetch = await Note.find();
        res.status(200).json(notefetch); 
    } catch (error) {
        res.status(404).json({message: error.message });
        
    }
};

//@route: POST/notes
//@purpose: : Post new note by user
export const postNotes = async (req , res ) => {
    const post = req.body;
    const newNotes = new Note(post);

    try {
        await newNotes.save();
        res.status(201).json(newNotes)
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};

// @route: 

