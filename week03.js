
client.connect(err => {
    if(err) {
        console.log(err.message)
    }
    console.log('Connected to MongoDB');

    client.db().admin().ListDatabases().then(result => {
        console.log(result);
    })
});