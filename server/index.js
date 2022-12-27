const express = require('express')
const cors = require('cors');
const jwt = require('jsonwebtoken')
const { MongoClient, ObjectId} = require("mongodb");
const bcrypt = require('bcryptjs');
const {datetime} = require('datetime')
const {result} = require("lodash");
const myArgs = process.argv.slice(2);
const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
const uri = "mongodb://app:"+myArgs[0]+"@altair-studios.fr:1727/?tls=true&tlsCAFile=C:\\Users\\micha\\Documents\\ca.pem&tlsCertificateKeyFile=C:\\Users\\micha\\Documents\\mongodb.pem&authMechanism=DEFAULT";
let salt = ''
const client = new MongoClient(uri);
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        salt = await bcrypt.genSalt(10)
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

async function getCollec(str,options,filter){
    console.log(filter)
    try {
        const cursor = await client.db("app").collection(str).find(filter,options);
        return await cursor.toArray();
    }catch (e) {
        return e;
    }
}

async function validateRegister(content) {
    let detectResults = [];
    if (content.fName === undefined || content.fName.length === 0) {
        detectResults.push({field: 'fName', errorType: "The first name is mandatory", input: content.fName})
    }
    if (content.lName === undefined || content.lName.length === 0) {
        detectResults.push({field: 'lName', errorType: "the last name is mandatory", input: content.lName})
    }
    if (content.email === undefined || content.email.length === 0) {
        detectResults.push({field: 'email', errorType: "The email is mandatory", input: content.email})
    }
    if (content.password === undefined || content.password.length === 0) {
        detectResults.push({field: 'password', errorType: "The password is mandatory", input: content.password})
    }
    if (content.birtDate === undefined || content.birtDate.length === 0) {
        detectResults.push({field: 'birtDate', errorType: "The birth date is mandatory", input: content.birtDate})
    }
    const emailUniqueTest = await client.db('app').collection('auth').findOne({email: content.email})
    if (emailUniqueTest !== null) {
        detectResults.push({field: 'email', errorType: "This email address already exists", input: content.email})
    }
    if (detectResults.length !== 0) {
        return detectResults;
    }
}
async function validateLogin(content) {
    let detectResults = [];
    if (content.email === undefined || content.email.length === 0) {
        detectResults.push({field: 'email', errorType: "The email is mandatory", input: content.email})
    }
    if (content.password === undefined || content.password.length === 0) {
        detectResults.push({field: 'password', errorType: "The password is mandatory", input: content.password})
    }
    const emailUniqueTest = await client.db('app').collection('auth').findOne({email: content.email})
    console.log(emailUniqueTest)
    if (emailUniqueTest === null) {
        detectResults.push({field: 'email or password', errorType: "The email or the password doesn't match", input: content.email})
    }else{
        const validPass = await bcrypt.compare(content.password,emailUniqueTest.password);
        if (!validPass){
            detectResults.push({field: 'email or password', errorType: "The email or the password doesn't match", input: content.email})
        }
    }
    if (detectResults.length !== 0) {
        return detectResults;
    }else{
        return {email:emailUniqueTest.email,status:'OK'}
    }
}

async function postRegister(content){
    try {
        let errors = await validateRegister(content)
        if (errors !== undefined){
            return {status:'ERROR',error:errors};
        }else{
            content.status = "OK"
            return await client.db("app").collection('auth').insertOne(content);
        }
    }catch (e) {
        return {status:'ERROR',error:e};
    }
}

async function initSearchSession(){
    let content = {};
    try {
        content.status = "search";
        resultat = await client.db("app").collection('tripFile').insertOne(content);
        //return await client.db("app").collection('tripFile').insertOne(content);
        return resultat.insertedId.toString();
    }catch (e) {
        return {status:'ERROR',error:e};
    }
}

async function postLogin(content){
    try {
        let errors = await validateLogin(content)
        if (errors.status !== 'OK'){
            return {status:'ERROR',error:errors};
        }else{
            return errors;
        }
    }catch (e) {
        return {status:'ERROR',error:e};
    }
}

const app = express()
app.use(cors({
    origin: '*',
}));
app.use(express.json())
app.get('/compagnie/reqCabines', async (req, res) => {
    res.status(200).json(await getCollec('cabines',{projection: { _id: 0, cabine: 1}},{}))
})
app.get('/compagnie/reqAirports', async (req, res) => {
    res.status(200).json(await getCollec('airports',{projection: { _id: 0, name: 1,iata_code:1,country:1}},{}))
})

async function checkSeatsAvailable(item,passengers,cabin) {
    let sizeAircraft;
    let bookings = await getCollec('bookings', {}, {
        "flight": item._id,
        "class": cabin
    })
    let aircraft = await getCollec('aircrafts', {}, {
        "_id": item.aircraft
    })
    switch (cabin) {
        case 'e':
            sizeAircraft = aircraft.seats_economy;
            break;
        case 'p':
            sizeAircraft = aircraft.seats_economy;
            break;
        case 'b':
            sizeAircraft = aircraft.seats_business;
            break;
        case 'f':
            sizeAircraft = aircraft.seats_first;
            break;
    }
    return bookings.length >= sizeAircraft;
}

async function fineFlightResults(queryResults,passengers,cabin) {
    /*queryResults.forEach(e => {
        if (checkSeatsAvailable()){
            queryResults.
        }
    })*/
    let resultat = await queryResults.filter(async item => await checkSeatsAvailable(item, passengers, cabin));
    return resultat;
}

function getProjection(cabin) {
    switch (cabin) {
        case 'e': return{projection: { price_premium: 0, price_business: 0,price_first:0},price_economy: '$price'}
        case 'p': return{projection: { price_economy: 0, price_business: 0,price_first:0},price_premium: '$price'}
        case 'b': return{projection: { price_economy: 0, price_premium: 0,price_first:0},price_business: '$price'}
        case 'f': return{projection: { price_economy: 0, price_premium: 0,price_business:0},price_first: '$price'}
        default : return {}

    }
}

async function checkAskToken(askToken) {
    let files = await getCollec('tripFile', {}, {
        _id: {
            $eq: ObjectId(askToken)
        },
    })

    return files.length !== 0
}

app.get('/compagnie/reqFlights', async (req, res) => {
    console.log(req.query.departureDate)
    console.log(req.query.arrivalDate)
    let airport_a = req.query.arrivalAirport;
    let airport_d = req.query.departureAirport;
    console.log(airport_a)
    console.log(airport_d)
    strArrival = req.query.arrivalDate;
    strDeparture = req.query.departureDate;

    if (req.query.departureDate === undefined){
        res.status(400).send('Please give a departure date')
    }else if (req.query.cabin === undefined){
        res.status(400).send('Please specify a cabin class')
    }else if (req.query.nbPassengers === undefined){
        res.status(400).send('Please give a number of passengers')}
    else if (req.query.departureAirport === undefined || req.query.arrivalAirport === undefined){
        res.status(400).send('Please give a departure airport and an arrival airport')
    }else if(!strDeparture.match(dateFormatRegex)){
        res.status(400).send('Please respect the date format YYYY-MM-DD')
    }else if(!(req.query.cabin === 'e' || req.query.cabin === 'f' || req.query.cabin === 'b' || req.query.cabin === 'p')){
        res.status(400).send('Please specify a correct cabin class (e,p,b or f)')
    }else if (req.query.askToken !== undefined && !await checkAskToken(req.query.askToken)){
        res.status(400).send('Incorrect search token')
    }else {
        arrival = new Date(req.query.arrivalDate)
        departure = new Date(req.query.departureDate)
        let resultats = {};
        resultats.request = await fineFlightResults(await getCollec('flights', getProjection(req.query.cabin), {
            "date_departure": { $eq: departure},
            "airport_departure": parseInt(airport_d),
            "airport_arrival": parseInt(airport_a)
        }),req.query.nbPassengers,req.query.cabin)
        if (req.query.askToken === undefined){
            resultats.askToken = await initSearchSession(req.query.nbPassengers,req.query.cabin);
        }
        res.status(200).json(resultats)
    }
})
app.get('/', async (req, res,next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied')
    try {
        const verified = jwt.verify(token,myArgs[1])
        req.user = verified;
        res.status(200).send(req.user)
        next()
    }catch (e) {
        res.status(400).send('Invalid Token')
    }
})
app.post('/compagnie/auth/register',async (req,res) =>{
    res.status(200).json()
})
app.post('/compagnie/auth/register',async (req,res) =>{
    const retrieved = await postRegister({
        lName: req.body.lName,
        fName: req.body.fName,
        email: req.body.email,
        password : await bcrypt.hash(req.body.password,salt),
        birtDate: req.body.birtDate
    })
    retrieved.status === 'ERROR' ? res.status(400).json(retrieved) : res.status(200).json(retrieved)
})
app.post('/compagnie/auth/login',async (req,res) =>{
    const retrieved = await postLogin({
        email: req.body.email,
        password : req.body.password
    })
    const token = jwt.sign({_id: retrieved._id},myArgs[1],{algorithm: 'HS256'});
    retrieved.status === 'ERROR' ? res.status(400).json(retrieved) : res.status(200).header('auth_token',token).json(retrieved)
})
app.listen(4318, "",() => {console.log("Serveur à l'écoute 4318")})