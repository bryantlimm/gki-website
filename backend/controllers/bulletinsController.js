const multer = require('multer');
const path = require('path');
const Bulletin = require('../models/Bulletin');

// multer file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); 
    }
});

const upload = multer({ storage: storage });

exports.upload = upload.single('photo');

// create warta
exports.createBulletin = async (req, res) => {
    const { title, text } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null; // Get the uploaded photo path
    try {
        const newBulletin = await Bulletin.create(title, text, photo); // Ensure your create method matches this signature
        res.json(newBulletin);
    } catch (error) {
        console.error('Error creating bulletin:', error);
        res.status(500).json({ message: 'Error creating bulletin' });
    }
};

// get warta method
exports.getBulletins = async (req, res) => {
    try {
        const bulletins = await Bulletin.getAll(); // Ensure your getAll method returns all bulletins
        res.json(bulletins);
    } catch (error) {
        console.error('Error getting bulletins:', error);
        res.status(500).json({ message: 'Error getting bulletins' });
    }
};

// delete warta
exports.deleteBulletin = async (req, res) => {
    const { id } = req.params;
    try {
        await Bulletin.delete(id); 
        res.json({ message: 'Bulletin deleted' });
    } catch (error) {
        console.error('Error deleting bulletin:', error);
        res.status(500).json({ message: 'Error deleting bulletin' });
    }
};

// update warta
exports.updateBulletin = async (req, res) => {
    const { id } = req.params;
    const { title, text } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : req.body.photo;

    try {
        const updatedBulletin = await Bulletin.update(id, title, text, photo);
        res.json(updatedBulletin);
    } catch (error) {
        console.error('Error updating bulletin:', error);
        res.status(500).json({ message: 'Error updating bulletin' });
    }
};

