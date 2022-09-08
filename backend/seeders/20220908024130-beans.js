module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'beans',
      [
        {
          name: 'Sumatra',
          origin: 'Indonesia',
          grind: 'Whole Bean',
          roast: 'Dark',
          description:
            'Revel in the rich taste of a delicious coffee with a cup of our Sumatra Mandheling.',
          price: '18.99',
          img: 'https://cdn.shopify.com/s/files/1/0554/7763/3189/products/SumatraMandheling_01a3a100-942a-4944-9652-a92eb8e338d8_1296x.png?v=1638290759',
          organic: 'Organic',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'French Roast',
          origin: 'Colombia',
          grind: 'Whole Bean',
          roast: 'Dark',
          description:
            'Our French Roast blend is known for its smooth flavor and mild taste.',
          price: '18.99',
          img: 'https://cdn.shopify.com/s/files/1/0554/7763/3189/products/FrenchRoast_de84cf54-e19c-4142-877b-993b21dfc7e1_1296x.png?v=1638281524',
          organic: 'Organic',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Zoommatra',
          origin: 'Indonesia',
          grind: 'Whole Bean',
          roast: 'Dark',
          description:
            'Revel in the rich taste of a delicious coffee with a cup of our Sumatra Mandheling.',
          price: '18.99',
          img: 'https://cdn.shopify.com/s/files/1/0554/7763/3189/products/SumatraMandheling_01a3a100-942a-4944-9652-a92eb8e338d8_1296x.png?v=1638290759',
          organic: 'Organic',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Italian Roast',
          origin: 'Colombia',
          grind: 'Whole Bean',
          roast: 'Dark',
          description:
            'Our French Roast blend is known for its smooth flavor and mild taste.',
          price: '18.99',
          img: 'https://cdn.shopify.com/s/files/1/0554/7763/3189/products/FrenchRoast_de84cf54-e19c-4142-877b-993b21dfc7e1_1296x.png?v=1638281524',
          organic: 'Organic',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('beans', null, {})
  }
}
