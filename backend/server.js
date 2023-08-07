// Backend server (server.js)
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Configure multer to store uploaded files in the 'uploads' directory
const storage = multer.diskStorage({
  destination: '../frontend/public/uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('File uploaded:', req.file);
  res.json({ 
    message: 'File uploaded successfully',
    filename: req?.file?.filename
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
