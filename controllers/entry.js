const Entry = require('../models/Entry');

exports.createEntry = async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    await newEntry.save();
    res.status(201).json({newEntry});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getEntriesByHolder = async (req, res) => {
  try {
    const entries = await Entry.find({ holder: req.params.id }).populate('laptop');
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEntriesByDay = async (req, res) => {
  try {
    const entries = await Entry.find({ entrytime: { $gte: new Date().setHours(0, 0, 0), $lt: new Date().setHours(23, 59, 59) } });
    res.json({entries});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEntriesByDates = async (req, res) => {
  try {
    const { start, end } = req.body;
    const entries = await Entry.find({ entrytime: { $gte: new Date(start), $lte: new Date(end) } });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.registerCheckout = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    entry.checkout = Date.now();
    await entry.save();
    res.json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
