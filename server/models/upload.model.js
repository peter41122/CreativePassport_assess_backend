var conn = require('./database');

const Upload = function(uploadedData) {
  this.firstname = uploadedData.firstname
  this.lastname = uploadedData.lastname
  this.birthday = uploadedData.birthday
  this.interests = uploadedData.interests
  this.mutitle = uploadedData.mutitle
  this.mupath = uploadedData.mupath
}

Upload.create = async (newData, result) => {
  conn.query("INSERT INTO storage SET ?", newData, (err, res) => {
    if (err) {
      result(err, null)
      return
    }

    result(null, { id: res.insertId, ...newData })
  })
}

Upload.getAll = async result => {
  conn.query("SELECT * FROM storage ", (err, res) => {
    if (err) {
      result(null, err)
      return
    }

    result(null, res)
  })
}

Upload.findById = async (selId, result) => {
  conn.query("SELECT * FROM storage WHERE id=${selId}", (err, res) => {
    if (err) {
      result(null, err)
      return
    }

    if (res.length) {
      result(null, res[0])
      return
    }

    result({ kind: "not_found"}, null)
  })
}

Upload.deleteById = async (selectedId, result) => {
  conn.query(`DELETE FROM storage WHERE id=${selectedId}`, (err, res) => {
    if (err) {
      result(err, null)
      return
    }

    result(null, {id: res.insertId, ...selectedId})
  })
}

module.exports = Upload;