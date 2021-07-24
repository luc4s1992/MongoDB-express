var userModel = require('../../models/users')

function register(req, res) {
  var userInfo = req.body
  var newUser = new userModel(userInfo)
  newUser.password = newUser.setPassword(userInfo.password)

  newUser.save(function(err, result) {
    if (err) {
      throw err
    }
    else {
      res.send('register successfully')
    }
  })
}

module.exports = {
  register,
}