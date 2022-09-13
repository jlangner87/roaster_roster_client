module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'retailers',
      [
        {
          name: "Sally's Marketplace",
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'The Little Botique',
          location: 'Bangor, Maine',
          logo: 'https://img.freepik.com/free-vector/fashion-logo_23-2148558723.jpg?w=2000&t=st=1663100108~exp=1663100708~hmac=aef588e73f98aaa185858e38e7801cac7e138effb99bbcf56775a4445ec7cfd6',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Corner Store',
          location: 'Washington D.C',
          logo: 'https://img.freepik.com/premium-vector/supermarket-logo_23-2148459011.jpg?w=1480',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Brian's Book Shop",
          location: 'Jackson, Mississippi',
          logo: 'https://img.freepik.com/free-vector/hand-drawn-bookstore-logo_23-2149331310.jpg?w=1480&t=st=1663100185~exp=1663100785~hmac=945101a7fedbf131bc0bd2b520201619fa360f22adacdec1fdb17434bb1c981a',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Records & Things',
          location: 'Austin, Texas',
          logo: 'https://img.freepik.com/free-vector/vintage-background-with-vinyl-record_260559-180.jpg?w=1480&t=st=1663100211~exp=1663100811~hmac=c5e4cbc7f15c90f1c6892e4fab0ac0e2a385948b8169a4a2cb33944b6ce9e8c9',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('retailers', null, {})
  }
}
