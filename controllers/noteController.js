// controllers/noteController.js
import Note from '../models/Note.js';

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.create({
      title,
      content,
      userId: req.user.id
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: 'Could not create note', details: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes', details: error.message });
  }
};
