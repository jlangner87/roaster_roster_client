module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'roasters',
      [
        {
          name: 'Scout Finch',
          location: 'South Carolina',
          bio: 'We believe in delivering that five-star, steaming explosion of complex flavors, drinking experience. We want to deliver to you the depth of flavor that is naturally present in each coffee bean, and we want you to experience how it shines through. Not only that, we also want to deliver it to your door…quickly!',
          wesite: 'https://scoutfinch.com/',
          logo: 'https://cdn.shopify.com/s/files/1/0628/1697/7120/files/mobile_SF_Scale_1_Logo_250x.png?v=1645581070',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Coffea Roasterie',
          location: 'Sioux Falls, South Dakota',
          bio: 'Were a group of coffee lovers residing in Sioux Falls, SD, who are dedicated to using our passion and craft to create unique and memorable experiences in the world of specialty coffee. We tend to come alive when were connecting with our community, serving up innovative drinks, and working with the dedicated producers who make what we do possible. When we opened the doors to our first café and roasterie in 2009, we had no idea that we’d still be doing this ten-plus years later. What’s kept us going is the joy of bringing awesome coffees and teas from incredible producers to our community in South Dakota and beyond. Were dedicated to using our passion and resources so that more people can appreciate and enjoy quality coffees with each other, one cup and one day at a time.',
          wesite: 'https://coffearoasterie.com/',
          logo: 'https://cdn.shopify.com/s/files/1/2111/5237/files/Coffea_DT_Sign_600x600.jpg?v=1619108411',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Dark Matter Coffee',
          location: 'Chicago, Illinois',
          bio: 'In a world driven by technology and science, we are the gravitational resistance rooted in skill and philosophy. An innovative culinary family fueled by community and passion to deliver the most intellectually honest coffee you will experience. Dark Matter Coffee® adheres to a philosophy where quality coffees are sourced based on traceability, innovation and social responsibility. Sustainability and fair business practices are very important to us. We have created direct partnerships with farmers in El Salvador, Guatemala, Colombia, and Mexico. These partnerships have grown to become family, allowing us to directly source our beans from the plant to the cup. This sourcing transparency yields fair business practices and unparalleled quality control, a difference that can be tasted in every cup',
          wesite: 'https://www.darkmattercoffee.com/',
          logo: 'https://cdn.shopify.com/s/files/1/0294/6861/files/DMC_Raul_circle_logo_purple_600x.png?v=1605023921',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Stone Street Coffee Company',
          location: 'Brooklyn, New York',
          bio: 'Freshness is paramount in Stone Street coffee, and our business is built on it. From the best sourcing and quality assurance, to our commitment to small batch roasting, we ensure that ours are the best coffee beans around',
          wesite: 'https://stonestreetcoffee.com/',
          logo: 'http://cdn.shopify.com/s/files/1/0554/7763/3189/files/Horizontal_Logo_1200x1200.png?v=1621866994',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Stone Bru Coffee Company',
          location: 'Sioux City, Iowa',
          bio: 'We have a full service wholesale division. We provide coffee sales, cafe accessories, espresso equipment, and equipment repair.',
          wesite: 'https://www.stonebru.com/',
          logo: 'https://cdn.shopify.com/s/files/1/0287/3553/7283/files/Stone_Bru_Coffee_co_-_Wordmark_560x.jpg?v=1576950991',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Firehouse Coffee',
          location: 'Brooklyn, New York',
          bio: 'While working long and challenging shifts under loud helicopter rotors, flashing lights, and sirens I realized how many nurses, firefighters, police officers, and first responders drink and depended on bad tasting coffee. With entrepreneurial passion and a love for firefighting and healthcare it all came together to offer great tasting gourmet coffee with a firehouse niche. Firehouse Coffee has always been my American dream!',
          wesite: 'https://firehousecoffee.com/',
          logo: 'https://cdn.shopify.com/s/files/1/0324/3655/1811/files/firehouse-coffee_340x.png?v=1629491077',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Corazon Coffee Roasters',
          location: 'West DesMoines, Iowa',
          bio: 'We roast organic, fair trade, and totally unique coffee beans in Des Moines.',
          wesite: 'https://www.corazoncoffeeroasters.com/',
          logo: 'https://www.corazoncoffeeroasters.com/img/icon_monochrome_small_2.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Zanzibar's Coffee Adventure",
          location: 'DesMoines, Iowa',
          bio: 'Celebrating coffee and community since 1993 in the Ingersoll Avenue neighborhood. Locally owned and operated, we roast small batch coffee on-site, in one location. We only roast and sell high quality, specialty-grade Arabica coffee.',
          wesite: 'https://zanzibarscoffee.com/',
          logo: 'https://cdn.shopify.com/s/files/1/0295/5404/9117/files/ZAN2C3_360x.jpg?v=1588185698',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Spyhouse Coffee Roasters',
          location: 'Minneapolis, Minnesota',
          bio: 'Since the beginning, we wanted Spyhouse to be a welcoming environment for our customers and communities; we didn’t want a niche café that felt exclusive. We aim to be a destination café for the Twin Cities and open up the coffee community to all who want to be a part of it.',
          wesite: 'https://spyhousecoffee.com/',
          logo: 'https://cdn.shopify.com/s/files/1/0266/4909/files/SCR_logo_1_cut_arc_black-01_240x@2x.png?v=1616017171',
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
