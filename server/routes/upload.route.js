const multer = require('multer')
const { v4: uuidv4 } = require('uuid');

const DIR = './upload';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        console.log("file.mimetype", file.mimetype)
        if (file.mimetype == "audio/mpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only mp3, wav format allowed!'));
        }
    }
});


module.exports = app => {
    var uploadedData = require('../controllers/upload.controller')

    app.post("/api/upload", upload.single('music'), (req, res, next) => {
        uploadedData.add(req, res);
    })
    app.post("/api/delete", uploadedData.deleteById)
    app.get("/api/findAll", uploadedData.findAll)
}