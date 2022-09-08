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
  res.send('Delete route ends at the delete controller')
}

module.exports = {
  GetBeans,
  PostBean,
  GetOneBean,
  DeleteBean
}
