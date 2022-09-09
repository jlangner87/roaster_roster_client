const { Bean } = require('../models')

const GetBeans = async (req, res) => {
  try {
    const all = await Bean.findAll()
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

const Organic = async (req, res) => {
  let organics = await Bean.findAll({
    where: {
      organic: true
    }
  })
  res.send(organics)
}

const DarkRoast = async (req, res) => {
  let darks = await Bean.findAll({
    where: {
      roast: 'Dark'
    }
  })
  res.send(darks)
}

const LightRoast = async (req, res) => {
  let lights = await Bean.findAll({
    where: {
      roast: 'Light'
    }
  })
  res.send(lights)
}

const BlondeRoast = async (req, res) => {
  let blondes = await Bean.findAll({
    where: {
      roast: 'Blonde'
    }
  })
  res.send(blondes)
}

const EspressoRoast = async (req, res) => {
  let espressos = await Bean.findAll({
    where: {
      roast: 'Espresso'
    }
  })
  res.send(espressos)
}

const WholeBean = async (req, res) => {
  let bean = await Bean.findAll({
    where: {
      grind: 'Whole Bean'
    }
  })
  res.send(bean)
}

const CourseGround = async (req, res) => {
  let bean = await Bean.findAll({
    where: {
      grind: 'Coarse Grind'
    }
  })
  res.send(bean)
}

const FineGround = async (req, res) => {
  let bean = await Bean.findAll({
    where: {
      grind: 'Fine Grind'
    }
  })
  res.send(bean)
}

const OriginCollections = async (req, res) => {
  let originName = req.params.country
  let OriginCollection = await Bean.findAll({
    where: { origin: originName }
  })
  res.send(OriginCollection)
}

module.exports = {
  GetBeans,
  PostBean,
  GetOneBean,
  DeleteBean,
  PatchBean,
  GetBeanByRoaster,
  GetBeanByRetailer,
  Organic,
  DarkRoast,
  LightRoast,
  BlondeRoast,
  EspressoRoast,
  WholeBean,
  CourseGround,
  FineGround,
  OriginCollections
  // Decaf
}
