module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'roasters',
      [
        {
          name: 'Stone Street',
          state: 'New York',
          bio: 'Stone Street is artisanal quality coffee for every New Yorker.',
          site: 'https://stonestreetcoffee.com/pages/about',
          logo: 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://bermu.ir/wp-content/uploads/2020/07/good-taste-club-badge.png',
          beans:
            'I need to associate these... But it is so late right now... I will do it in the morning',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Scout Finch',
          state: 'Georgia',
          bio: 'Stone Street is artisanal quality coffee for every New Yorker.',
          site: 'https://stonestreetcoffee.com/pages/about',
          logo: 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://bermu.ir/wp-content/uploads/2020/07/good-taste-club-badge.png',
          beans:
            'I need to associate these... But it is so late right now... I will do it in the morning',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fire House',
          state: 'Colorado',
          bio: 'Stone Street is artisanal quality coffee for every New Yorker.',
          site: 'https://stonestreetcoffee.com/pages/about',
          logo: 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://bermu.ir/wp-content/uploads/2020/07/good-taste-club-badge.png',
          beans:
            'I need to associate these... But it is so late right now... I will do it in the morning',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Highest Love',
          state: 'California',
          bio: 'Stone Street is artisanal quality coffee for every New Yorker.',
          site: 'https://stonestreetcoffee.com/pages/about',
          logo: 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://bermu.ir/wp-content/uploads/2020/07/good-taste-club-badge.png',
          beans:
            'I need to associate these... But it is so late right now... I will do it in the morning',
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
