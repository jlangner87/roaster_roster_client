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

const DumpRoasters = async (req, res) => {
  await Roaster.destroy({
    where: {}
  })
  res.send('You just deleted ALL Roasters')
}

module.exports = {
  GetRoasters,
  GetOneRoaster,
  DumpRoasters
}
