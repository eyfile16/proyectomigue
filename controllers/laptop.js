const Laptop = require('../models/Laptop');

exports.createLaptop = async (req, res) => {
  try {
    const newLaptop = new Laptop(req.body);
    await newLaptop.save();
    res.status(201).json({newLaptop});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.updateLaptop = async (req, res) => {
  try {
    const updatedLaptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLaptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find().populate('holder');
    res.json({laptops});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getLaptopById = async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id).populate('holder');
    res.json(laptop);
  } catch (error) {
    res.status(404).json({ message: 'Laptop not found' });
  }
};


exports.activateLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(req.params.id, { state: 'active' }, { new: true });
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deactivateLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(req.params.id, { state: 'inactive' }, { new: true });
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.generateQR = async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    const qrCode = 'Genera el código QR aquí';
    laptop.qrcode = qrCode;
    await laptop.save();
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
