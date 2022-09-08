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
  res.send(`The post controller is active`)
  // try {
  //   let beanDetails = {
  //     ...req.body
  //   }
  //   let newBean = await Bean.create(beanDetails)
  //   res.send(newBean)
  // } catch (err) {
  //   throw err
  // }
}

module.exports = {
  GetBeans,
  PostBean
}
