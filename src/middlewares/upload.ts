import multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './src/public/uploads/');
  },
  filename(req, file, cb) {
    cb(null, Date.now() + '.' + file.originalname.split('.').pop());
  }
});

// use memory in ram instead
// const storage = multer.memoryStorage();

export const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  storage,
});
