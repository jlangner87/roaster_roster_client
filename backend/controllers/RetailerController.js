const { Retailer } = require('../models')

const GetRetailers = async (req, res) => {
  let all = await Retailer.findAll()
  res.send(all)
}

module.exports = {
  GetRetailers
}
