const { Roaster } = require('../models')

const GetRoasters = async (req, res) => {
  let all = await Roaster.findAll()
  res.send(all)
}

module.exports = {
  GetRoasters
}
