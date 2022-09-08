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
  let beanId = parseInt(req.params.beans_id)
  let editedBean = await Bean.update(req.body, {
    where: { id: beanId },
    returning: true
  })
  res.send(editedBean)
}

const GetBeanByRoaster = async (req, res) => {
  let roasterId = parseInt(req.params.roaster_id)
  let beanCollection = await Bean.findAll({
    where: { roaster: roasterId }
  })
  res.send(beanCollection)
}

const GetBeanByRetailer = async (req, res) => {
  let retailerId = parseInt(req.params.retailer_id)
  let retailerCollection = await Bean.findAll({
    where: { retailer: retailerId }
  })
  res.send(retailerCollection)
}

module.exports = {
  GetBeans,
  PostBean,
  GetOneBean,
  DeleteBean,
  PatchBean,
  GetBeanByRoaster,
  GetBeanByRetailer
}
