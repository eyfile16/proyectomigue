const Holder = require('../models/Holder'); 

exports.createHolder = async (req, res) => {
  try {
    const newHolder = new Holder(req.body);
    await newHolder.save();
    res.status(201).json({newHolder});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateHolder = async (req, res) => {
  try {
    const updatedHolder = await Holder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHolder) {
      return res.status(404).json({ message: 'Holder not found' });
    }
    res.json(updatedHolder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getHolders = async (req, res) => {
  try {
    const holders = await Holder.find();
    res.json({holders});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHolderById = async (req, res) => {
  try {
    const holder = await Holder.findById(req.params.id);
    if (!holder) {
      return res.status(404).json({ message: 'Holder not found' });
    }
    res.json(holder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.activateHolder = async (req, res) => {
  try {
    const holder = await Holder.findByIdAndUpdate(req.params.id, { state: 'active' }, { new: true });
    if (!holder) {
      return res.status(404).json({ message: 'Holder not found' });
    }
    res.json(holder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deactivateHolder = async (req, res) => {
  try {
    const holder = await Holder.findByIdAndUpdate(req.params.id, { state: 'inactive' }, { new: true });
    if (!holder) {
      return res.status(404).json({ message: 'Holder not found' });
    }
    res.json(holder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.activateHolder = async (req, res) => {
  try {
    const holder = await Holder.findByIdAndUpdate(req.params.id, { state: 'active' }, { new: true });
    res.json(holder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deactivateHolder = async (req, res) => {
  try {
    const holder = await Holder.findByIdAndUpdate(req.params.id, { state: 'inactive' }, { new: true });
    res.json(holder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
