'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'demo@demo.com',
          category: 'Roaster',
          profilePic:
            'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Suzy Talksalot',
          email: 'demo@demo.com',
          category: 'Roaster',
          profilePic:
            'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jack Skelington',
          email: 'demo@demo.com',
          category: 'Roaster',
          profilePic:
            'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Santa Claus',
          email: 'demo@demo.com',
          category: 'Roaster',
          profilePic:
            'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
