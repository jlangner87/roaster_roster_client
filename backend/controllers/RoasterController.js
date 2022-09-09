const { Roaster } = require('../models')

const GetRoasters = async (req, res) => {
  let all = await Roaster.findAll()
  res.send(all)
}

const GetOneRoaster = async (req, res) => {
  let roasterId = parseInt(req.params.roasters_id)
  let desiredRoaster = await Roaster.findOne({
    where: { id: roasterId }
  })
  res.send(desiredRoaster)
}

module.exports = {
  GetRoasters,
  GetOneRoaster
}
