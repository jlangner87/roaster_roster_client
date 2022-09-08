module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'retailers',
      [
        {
          name: 'Coffee Shop 1',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Coffee Shop 2',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Coffee Shop 3',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Coffee Shop 4',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Coffee Shop 5',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Little Store 1',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Little Store 2',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Little Store 3',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Little Store 4',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
          website: 'https://coffearoasterie.com/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Little Store 5',
          location: 'Seattle, Washington',
          logo: 'https://www.logodesign.net/logo/aggressive-zebra-head-2068ld.png?size=2&industry=All',
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
