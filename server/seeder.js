const mongoose = require('mongoose');
const { Book } = require('./db');

const connectionString = "mongodb+srv://admin:test1234@cluster0.fisqo.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0";

const books = [
  {
    "_id": { "$oid": "675e8edfef71d7cf59998dfa" },
    "title": "The Great Gatsby",
    "description": "A novel written by F. Scott Fitzgerald about the Jazz Age.",
    "author": "F. Scott Fitzgerald",
    "publishedDate": "1925",
    "ISBN": "9780743273565",
    "image": "https://c7.alamy.com/comp/2AN3D2X/the-great-gatsby-cover-of-the-first-edition-of-the-1925-novel-by-f-scott-fitzgerald-2AN3D2X.jpg",
    "features": "Classic, Fiction, Drama",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998dfb" },
    "title": "1984",
    "description": "A dystopian novel by George Orwell.",
    "author": "George Orwell",
    "publishedDate": "1949",
    "ISBN": "9780451524935",
    "image": "https://c7.alamy.com/comp/2J00K9W/calgary-alberta-march-15-2022-selection-of-cover-of-george-orwells-1984-2J00K9W.jpg",
    "features": "Dystopian, Political Fiction",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998dfc" },
    "title": "To Kill a Mockingbird",
    "description": "A novel by Harper Lee about racial injustice in the Deep South.",
    "author": "Harper Lee",
    "publishedDate": "1960",
    "ISBN": "9780061120084",
    "image": "https://media.glamour.com/photos/56e1f3c462b398fa64cbd304/master/w_1600%2Cc_limit/entertainment-2016-02-18-main.jpg",
    "features": "Classic, Legal Drama, Coming-of-age",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998dfd" },
    "title": "Moby-Dick",
    "description": "Herman Melville's epic tale of the hunt for the white whale.",
    "author": "Herman Melville",
    "publishedDate": "1851",
    "ISBN": "9780142437247",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjjtZqayJnWX4S3IBvyQrZAEOOhEBprqtQw&s",
    "features": "Adventure, Classic, Sea Story",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998dfe" },
    "title": "Pride and Prejudice",
    "description": "Jane Austen's romantic novel about manners and marriage.",
    "author": "Jane Austen",
    "publishedDate": "1813",
    "ISBN": "9780141439518",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEkCzxRkATvLJ21Dt9VMlxf1FA8K2kUkMNw&s",
    "features": "Romance, Classic, Satire",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998dff" },
    "title": "The Catcher in the Rye",
    "description": "A novel by J.D. Salinger about teenage angst and alienation.",
    "author": "J.D. Salinger",
    "publishedDate": "1951",
    "ISBN": "9780316769488",
    "image": "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg",
    "features": "Classic, Coming-of-age, Fiction",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998e00" },
    "title": "Brave New World",
    "description": "A dystopian novel by Aldous Huxley.",
    "author": "Aldous Huxley",
    "publishedDate": "1932",
    "ISBN": "9780060850524",
    "image": "https://m.media-amazon.com/images/I/81Nh-L2M8YL.jpg",
    "features": "Dystopian, Science Fiction",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998e01" },
    "title": "War and Peace",
    "description": "A historical novel by Leo Tolstoy.",
    "author": "Leo Tolstoy",
    "publishedDate": "1869",
    "ISBN": "9781400079988",
    "image": "https://images.penguinrandomhouse.com/cover/9781400079988",
    "features": "Historical Fiction, Classic",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998e02" },
    "title": "Crime and Punishment",
    "description": "A psychological novel by Fyodor Dostoevsky.",
    "author": "Fyodor Dostoevsky",
    "publishedDate": "1866",
    "ISBN": "9780140449136",
    "image": "https://images-na.ssl-images-amazon.com/images/I/71+Gh5wGu0L.jpg",
    "features": "Classic, Psychological Fiction",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998e03" },
    "title": "The Odyssey",
    "description": "An ancient Greek epic poem attributed to Homer.",
    "author": "Homer",
    "publishedDate": "8th Century BC",
    "ISBN": "9780140268867",
    "image": "https://m.media-amazon.com/images/I/81MTbGszmrL.jpg",
    "features": "Epic, Adventure, Mythology",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998e04" },
    "title": "Frankenstein",
    "description": "A novel by Mary Shelley about a scientist who creates life.",
    "author": "Mary Shelley",
    "publishedDate": "1818",
    "ISBN": "9780143131848",
    "image": "https://m.media-amazon.com/images/I/81WYLo03xkL.jpg",
    "features": "Gothic, Horror, Science Fiction",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998e05" },
    "title": "Jane Eyre",
    "description": "A novel by Charlotte Brontë about the struggles of a young governess.",
    "author": "Charlotte Brontë",
    "publishedDate": "1847",
    "ISBN": "9780141441146",
    "image": "https://m.media-amazon.com/images/I/81qV9pEjQSL.jpg",
    "features": "Gothic, Romance, Coming-of-age",
    "__v": 0
  },
  {
    "_id": { "$oid": "675e8edfef71d7cf59998e06" },
    "title": "The Brothers Karamazov",
    "description": "A novel by Fyodor Dostoevsky exploring morality and faith.",
    "author": "Fyodor Dostoevsky",
    "publishedDate": "1880",
    "ISBN": "9780374528379",
    "image": "https://m.media-amazon.com/images/I/81t4cQRSySL.jpg",
    "features": "Philosophical, Psychological Fiction",
    "__v": 0
  }
];

  

const seedDB = async () => {
    try{
        // await mongoose.connect(connectionString);
        // console.log("Connected to MongoDB");

        await Book.deleteMany({});
        console.log(`Clared all the records`);
                
        await Book.insertMany(books);


        mongoose.connection.close();
        console.log(`Books Seeding Sucessfull`);
        
        
    }catch(err){
        mongoose.connection.close();
    }
}

seedDB();
