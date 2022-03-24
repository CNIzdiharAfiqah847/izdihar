const { MongoClient, ServerApiVersion, FindCursor } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.ohe8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
  if (err){
    console.log(err.message)
    return
  }
  console.log("Connected to mongodb");

  let result = client.db('Database').collection('abc').insertOne({
    name: 'Frances Lockman',
    city: '长 炫明',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1068.jpg',
    pass: '$2a$10$grHas3f4NtT7VdiDluLvouixg6tx7urtj3wtWHU1BIHzNWDP43gK6',
  })

  //client.db().admin().listDatabases().then(result =>{
  //  console.log(result['databases'][6]);
  //})

  //client.db('sample_training').listCollections().toArray().then(result=>{
  //  console.log(result);
  //})

  //client.db('sample_training').collection('inspections').find({'business_name': 'LD BUSINESS SOLUTIONS'}).toArray().then(result=>{
   // console.log(result);
 // })

});