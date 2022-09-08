const { Bean } = require('../models')

const GetBeans = async (req, res) => {
  try {
    const all = Bean.findAll()
    res.send(all)
  } catch (err) {
    throw err
  }
}

const PostBean = async (req, res) => {
  try {
    let beanDetails = {
      ...req.body
    }
    let newBean = await Bean.create(beanDetails)
    res.send(newBean)
  } catch (err) {
    throw err
  }
}

const GetOneBean = async (req, res) => {
  let beanId = parseInt(req.params.beans_id)
  let desiredBean = await Bean.findOne({
    where: { id: beanId }
  })
  res.send(desiredBean)
}

const DeleteBean = async (req, res) => {
  let beanId = parseInt(req.params.beans_id)
  await Bean.destroy({
    where: { id: beanId }
  })
  res.send('The bean has been killed')
}

const PatchBean = async (req, res) => {
  res.send(`The update route lands on the PatchBean controller`)
}

module.exports = {
  GetBeans,
  PostBean,
  GetOneBean,
  DeleteBean,
  PatchBean
}
