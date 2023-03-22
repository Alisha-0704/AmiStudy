const PORT = 8000
const express = require("express")
const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://A0lish7_:A0lish7@clusternoob.umtu1w6.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.get('/', (req, res) =>{
    res.json('Hello to my app')
})

app.post('/signup', (req, res) =>{
    res.json('Hello to my app')
})
app.get('/users', async (req, res) =>{
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('AmiStudy')
        database.collection('users')

        const returnedusers = await users.find().toArray()
        res.send(returnedusers)
    } finally {
        await client.close()
    }
})

app.listen(PORT, () => console.log('server running on port ' + PORT))