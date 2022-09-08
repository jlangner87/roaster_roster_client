module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'roasters',
      [
        {
          name: 'Fake Roaster 1',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fake Roaster 2',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fake Roaster 3',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fake Roaster 4',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fake Roaster 5',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fake Roaster 6',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fake Roaster 7',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fake Roaster 8',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fake Roaster 9',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fake Roaster 10',
          location: 'New York, New York',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa.',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?size=1&industry=All',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roasters', null, {})
  }
}
