var sql = require('../models/database');
var UploadModel = require('../models/upload.model');

exports.add = (req, res) => {
  console.log("Music:  ", req.file);
  console.log("Body: ", req.body);

  const newUpload = new UploadModel({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    birthday: req.body.birthday,
    interests: req.body.interests,
    mutitle: req.file.originalname,
    mupath: req.file.filename,
  })

  UploadModel.create(newUpload, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some errors occurred while uploading new data."
      })
    } else {
      res.send({ message: data })
    }
  })
}

exports.findAll = (req, res) => {
  UploadModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some errors occurred while retrieving data."
      })
    } else {
      res.send(data)
    }
  })
}

exports.deleteById = (req, res) => {
  console.log("req.body ------------>>>> ", req.body);
  console.log("req.body.selectedId ------------>>>> ", req.body.selectedId);
  UploadModel.deleteById(req.body.selectedId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found data with id ${req.body.keyword}`
        })
      } else {
        res.status(500).send({
          message: `Error retrieving data with id ${req.body.keyword}`
        })
      }
    } else {
      res.send({ message: data })
    }
  })
}