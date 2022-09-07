const { User } = require('../models/users')

//GET
const getUsers = async (req, res) => {
  let allUsers = await User.findAll()
  res.send(allUsers)
}

const getOneUser = async (req, res) => {
  let userId = parseInt(req.params.users_id)
  let selectedUser = await User.findOne({
    where: { id: userId }
  })
  res.send(selectedUser)
}
//POST
const postUser = async (req, res) => {
  let newUserInfo = {
    ...req.body
  }
  let newUser = await User.create(newUserInfo)
  res.send(newUser)
}

//DELETE
const deleteUser = async (req, res) => {
  let userId = parseInt(req.params.users_id)
  await User.destroy({
    where: { id: userId }
  })
  res.send(`Bean with id ${userId} was destroyed.`)
}

//PUT
const putUser = async (req, res) => {
  let userId = parseInt(req.params.users_id)
  let updatedUser = await User.update(req.body, {
    where: { id: userId }
  })
  res.send(updatedUser)
}

module.exports = {
  getUsers,
  getOneUser,
  postUser
}
