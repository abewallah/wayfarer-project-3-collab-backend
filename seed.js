const db = require('./models');

const cities = [
  {
    city: 'San Francisco, US',
    posts: [],
    img: 'https://www.sfaf.org/wp-content/uploads/posts/SF_bridge_1200x800.jpg'
  },
  {
    city: 'London, UK',
    posts: [],
    img: 'https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg'
  },
  {
    city: 'Los Angeles, US',
    posts: [],
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg'
  },
  {
    city: 'Seattle, US',
    posts: [],
    img: 'https://www.langan.com/wp-content/uploads/2020/01/Seattle-996x554-1.jpg'
  },
  {
    city: 'New York, US',
    posts: [],
    img: 'https://cdn.vox-cdn.com/thumbor/BmruaUB4BIUSCTwgsaO_7T9fL6M=/0x0:3500x2000/1200x675/filters:focal(1470x720:2030x1280)/cdn.vox-cdn.com/uploads/chorus_image/image/65088847/New_York_City_Central_Park_from_Above.0.jpg'
  },
];

//Delete All Cities
db.City.deleteMany({}, (err, deletedCities) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  console.log('Citys deleted successfully');

  //Create New Cities
  db.City.create(cities, (err, allCities) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log(`Created ${allCities.length} Citys successfully`);
    process.exit();
  });
});
