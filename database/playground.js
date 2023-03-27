// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Select the database to use.
use('mongodbVSCodePlaygroundDB');
use disect
db.createCollection("charities")

// The drop() command destroys all data from a collection.
// Make sure you run it against the correct database and collection.
db.sales.drop();

// Insert a few documents into the sales collection.
db.charities.insertMany([
  { '_id': 1, 'category': 'Labor Rights', 'name': 'Clean Clothes Campaign', 'main_website_url': 'https://cleanclothes.org/', 'donation_url': 'https://cleanclothes.org/donate', 'short_description': 'The Clean Clothes Campaign is a global network of over 235 organizations in more than 45 countries. It aims to improve the working conditions of the garment and sportswear industries by connecting various organizations, including grassroots unions, trade unions, and feminist organizations. The campaign is worker-centered and utilizes a horizontal operational structure to address local and global problems. They offer direct solidarity support to workers fighting against specific worker rights violations and co-develop global campaigns to achieve systemic goals. The campaign educates and mobilizes consumers, lobbies companies and governments, and cooperates with other labor rights campaigns. All members, partners, and associates are dedicated to empowering workers to ensure their fundamental rights are respected.' },
  { '_id': 2, 'category': 'Labor Rights', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 3, 'category': 'Labor Rights', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 4, 'category': 'Labor Rights', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 5, 'category': 'Labor Rights', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 6, 'category': 'Labor Rights', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 7, 'category': 'Carbon Emissions', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 8, 'category': 'Carbon Emissions', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 9, 'category': 'Carbon Emissions', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 10, 'category': 'Environmentally Friendly', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 11, 'category': 'Environmentally Friendly', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 12, 'category': 'Environmentally Friendly', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 13, 'category': 'Environmentally Friendly', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 14, 'category': 'Animal Cruelty', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 15, 'category': 'Animal Cruelty', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 16, 'category': 'LGBTQ', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 17, 'category': 'LGBTQ', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 18, 'category': 'LGBTQ', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 19, 'category': 'LGBTQ', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 20, 'category': 'LGBTQ', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 21, 'category': 'LGBTQ', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 22, 'category': 'LGBTQ', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 23, 'category': 'Black Owned', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 24, 'category': 'Black Owned', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 25, 'category': 'Fashion Sustainability', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
  { '_id': 26, 'category': 'American Owned', 'name': '', 'main_website_url': '', 'donation_url': '', 'short_description': '' },
]);

/*
// Run a find command to view items sold on April 4th, 2014.
db.sales.find({ date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') } });

// Build an aggregation to view total sales for each product in 2014.
const aggregation = [
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
];

// Run the aggregation and open a cursor to the results.
// Use toArray() to exhaust the cursor to return the whole result set.
// You can use hasNext()/next() to iterate through the cursor page by page.
db.sales.aggregate(aggregation);
*/
