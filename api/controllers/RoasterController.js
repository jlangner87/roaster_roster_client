const { Roaster } = require('../models/roasters')

//GET
const getRoasters = async (req, res) => {
  let allRoasters = await Roaster.findAll()
  res.send(allRoasters)
}

const getOneRoaster = async (req, res) => {
  let roasterId = parseInt(req.params.roasters_id)
  let selectedRoaster = await Roaster.find({
    where: { id: roasterId }
  })
  res.send(selectedRoaster)
}

//POST
const postRoaster = async (req, res) => {
  let newRoasterBody = {
    ...req.body
  }
  let newRoaster = await Recipe.create(newRoasterBody)
  res.send(newRoaster)
}

//DELETE
const deleteRoaster = async (req, res) => {
  let roasterId = parseInt(req.params.roasters_id)
  await Roaster.destroy({
    where: { id: roasterId }
  })
  res.send(`Roaster with id ${RoasterId} was destroyed.`)
}

//PUT
const putRoaster = async (req, res) => {
  let RoasterId = parseInt(req.params.roasters_id)
  let updatedRoaster = await Roaster.update(req.body, {
    where: { id: RoasterId }
  })
  res.send(updatedRoaster)
}

module.exports = {
  getRoasters,
  getOneRoaster,
  postRoaster,
  deleteRoaster,
  putRoaster
}
