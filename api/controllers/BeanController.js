const { Bean } = require('../models/beans')

//GET
const getBeans = async (req, res) => {
  let allBeans = await Bean.findAll()
  res.send(allBeans)
}

const getOneBean = async (req, res) => {
  let beanId = parseInt(req.params.beans_id)
  let selectedBean = await Bean.findOne({
    where: { id: beanId }
  })
  res.send(selectedBean)
}
//POST
const postBean = async (req, res) => {
  let newBeanInfo = {
    ...req.body
  }
  let newBean = await Bean.create(newBeanInfo)
  res.send(newBean)
}

//DELETE
const deleteBean = async (req, res) => {
  let beanId = parseInt(req.params.beans_id)
  await Bean.destroy({
    where: { id: beanId }
  })
  res.send(`Bean with id ${beanId} was destroyed.`)
}

//PUT
const putBean = async (req, res) => {
  let beanId = parseInt(req.params.beans_id)
  let updatedBean = await Bean.update(req.body, {
    where: { id: beanId }
  })
  res.send(updatedBean)
}

module.exports = {
  getBeans,
  getOneBean,
  postBean,
  deleteBean,
  putBean
}
