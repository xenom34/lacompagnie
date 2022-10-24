const express = require('express')
const cors = require('cors');

const { MongoClient } = require("mongodb");
const myArgs = process.argv.slice(2);
// Connection URI
const uri = "mongodb://app:"+myArgs[0]+"@altair-studios.fr:1727/?tls=true&tlsCAFile=C:\\Users\\micha\\Documents\\ca.pem&tlsCertificateKeyFile=C:\\Users\\micha\\Documents\\mongodb.pem&authMechanism=DEFAULT";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        const db = client.db("app")
        // Establish and verify connection
        await db.command({ ping: 1 });
        console.log("Connected successfully to server");
    }catch (e){
        console.error(e)
    }
}
run().catch(console.dir);

async function getCollec(str,options){
    try {
        const cursor = await client.db("app").collection(str).find({},options);
        return await cursor.toArray();
    }catch (e) {
        return e;
    }
}

const app = express()
app.use(cors({
    origin: '*',
}));
app.get('/compagnie/reqCabines', async (req, res) => {
    res.status(200).json(await getCollec('cabines',{projection: { _id: 0, cabine: 1}}))
})
app.get('/compagnie/reqAirports', async (req, res) => {
    res.status(200).json(await getCollec('airports',{projection: { _id: 0, name: 1,iata_code:1,country:1}}))
})
app.listen(4318, "",() => {console.log("Serveur à l'écoute 4318")})