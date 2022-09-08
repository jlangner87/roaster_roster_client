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
  res.send('Make a new bean here')
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

const GetOneBean = async (req, res) => {
  res.send('The get one bean route works')
}

module.exports = {
  GetBeans,
  PostBean,
  GetOneBean
}
