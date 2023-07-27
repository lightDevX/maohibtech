const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//Midleware
app.use(cors());
app.use(express.json());

//khanmhasanuzzaman
//Va8lg5NGDI3jGcOL

const uri = "mongodb+srv://khanmhasanuzzaman:Va8lg5NGDI3jGcOL@maohibtech.58scevn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Simple CURD is Running...')
})

app.listen(port, () => {
    console.log(`CURD Port is :${port}`);
})