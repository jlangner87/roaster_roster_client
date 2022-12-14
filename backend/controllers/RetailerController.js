const { Retailer } = require('../models')

const GetRetailers = async (req, res) => {
  let all = await Retailer.findAll()
  res.send(all)
}
const GetOneRetailer = async (req, res) => {
  let retailerId = parseInt(req.params.retailers_id)
  let desiredRetailer = await Retailer.findOne({
    where: { id: retailerId }
  })
  res.send(desiredRetailer)
}

const DumpRetailers = async (req, res) => {
  await Retailer.destroy({
    where: {}
  })
  res.send('You just deleted ALL Retailers')
}

module.exports = {
  GetRetailers,
  GetOneRetailer,
  DumpRetailers
}
