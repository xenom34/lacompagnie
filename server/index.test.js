const app = require('./index');
const request = require('supertest');
const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;
describe('POST /compagnie/auth/login', () => {
    it('should return error when no email or password is given', async () => {
        const res = await request(app)
            .post('/compagnie/auth/login')
            .send({
                email: '',
                password: ''
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({
            "status": "ERROR",
            "error": [
                {
                    "field": "email",
                    "errorType": "The email is mandatory",
                    "input": ""
                },
                {
                    "field": "password",
                    "errorType": "The password is mandatory",
                    "input": ""
                }
            ]
        })
    });

    it('should return error when fields email and password does not exist', async () => {
        const res = await request(app)
            .post('/compagnie/auth/login')
            .send({});
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({
            "status": "ERROR",
            "error": [
                {
                    "field": "email",
                    "errorType": "The email is mandatory",

                },
                {
                    "field": "password",
                    "errorType": "The password is mandatory"
                }
            ]
        })
    });

    it('should return 400 with missing password', async () => {
        const res = await request(app)
            .post('/compagnie/auth/login')
            .send({
                email: 'test@test.com'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({
            "status": "ERROR",
            "error": [
                {
                    "field": "password",
                    "errorType": "The password is mandatory"
                }
            ]
        });
    });

    it('should return 400 with missing email', async () => {
        const res = await request(app)
            .post('/compagnie/auth/login')
            .send({
                password: 'password'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({
            "status": "ERROR",
            "error": [
                {
                    "field": "email",
                    "errorType": "The email is mandatory"
                }
            ]
        });
    });

    it('should return 400 with invalid email', async () => {
        const res = await request(app)
            .post('/compagnie/auth/login')
            .send({
                "email": "wrong@test.fr",
                "password" : "password"
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({
            "status": "ERROR",
            "error": [
                {
                    "field": "email or password",
                    "errorType": "The email or the password doesn't match",
                    "input": "wrong@test.fr"
                }
            ]
        });
    });

    it('should return 400 with invalid passwords', async () => {
        const res = await request(app)
            .post('/compagnie/auth/login')
            .send({
                "email": "test@test.fr",
                "password" : "wrongPassword"
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({
            "status": "ERROR",
            "error": [
                {
                    "field": "email or password",
                    "errorType": "The email or the password doesn't match",
                    "input": "test@test.fr"
                }
            ]
        });
    });

    it('should return 200 with correct login credentials', async () => {
        const res = await request(app)
            .post('/compagnie/auth/login')
            .send({
                email: "test@test.fr",
                password : "password"
            });
        expect(res.statusCode).toEqual(200);
        expect(res.header['auth_token']).toBeDefined();
        expect(res.body.status).toEqual('OK');
        expect(res.body.email).toEqual("test@test.fr");

    });
});
describe('POST /compagnie/auth/register', () => {
    // Test avec tous les champs renseignés
    it('should return status 200 and OK status when all fields are filled', async () => {
        const res = await request(app)
            .post('/compagnie/auth/register')
            .send({
                lName: 'Doe',
                fName: 'John',
                email: 'john.doe@example.com',
                password: 'password',
                birtDate: '01/01/2000'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.acknowledged).toEqual(true);
        expect(res.body.insertedId).toBeDefined();
    });

    // Test sans le champs fName
    it('should return status 400 and ERROR status when fName is missing', async () => {
        const res = await request(app)
            .post('/compagnie/auth/register')
            .send({
                "lName": "Doe",
                "email": "john.doe@example.fr",
                "password": "password",
                "birtDate": "01/01/2000"
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body.status).toEqual('ERROR');
        expect(res.body.error).toEqual([{
            field: 'fName',
            errorType: 'The first name is mandatory',
            input: undefined
        }]);
    });

    // Test sans le champs lName
    it('should return status 400 and ERROR status when lName is missing', async () => {
        const res = await request(app)
            .post('/compagnie/auth/register')
            .send({
                fName: 'John',
                email: 'john.doe@example.fr',
                password: 'password',
                birtDate: '01/01/2000'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body.status).toEqual('ERROR');
        expect(res.body.error).toEqual([{
            field: 'lName',
            errorType: 'the last name is mandatory',
            input: undefined
        }]);
    });

    // Test sans le champs email
    it('should return status 400 and ERROR status when email is missing', async () => {
        const res = await request(app)
            .post('/compagnie/auth/register')
            .send({
                lName: 'Doe',
                fName: 'John',
                password: 'password',
                birtDate: '01/01/2000'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body.status).toEqual('ERROR');
        expect(res.body.error).toEqual([{
            field: 'email',
            errorType: 'The email is mandatory',
            input: undefined
        }]);
    });

    // Test sans le champs password
    it('should return status 400 and ERROR status when password is missing', async () => {
        const res = await request(app)
            .post('/compagnie/auth/register')
            .send({
                lName: 'Doe',
                fName: 'John',
                email: 'john.doe@example.fr',
                birtDate: '01/01/2000'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body.status).toEqual('ERROR');
        expect(res.body.error).toEqual([{
            field: 'password',
            errorType: 'The password is mandatory',
            input: undefined
        }]);
    });

    // Test sans le champs birtDate
    it('should return status 400 and ERROR status when birtDate is missing', async () => {
        const res = await request(app)
            .post('/compagnie/auth/register')
            .send({
                lName: 'Doe',
                fName: 'John',
                email: 'john.doe@example.fr',
                password: 'password'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body.status).toEqual('ERROR');
        expect(res.body.error).toEqual([{
            field: 'birtDate',
            errorType: 'The birth date is mandatory',
            input: undefined
        }]);
    });

    // Test avec un email déjà existant
    it('should return status 400 and ERROR status when the provided email is already taken', async () => {
        const res = await request(app)
            .post('/compagnie/auth/register')
            .send({
                lName: 'Doe',
                fName: 'John',
                email: 'john.doe@example.fr',
                password: 'password',
                birtDate: '01/01/2000'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body.status).toEqual('ERROR');
        expect(res.body.error).toEqual([{
            field: 'email',
            errorType: 'This email address already exists',
            input: 'john.doe@example.fr'
        }]);
    });
});

describe('GET /compagnie/reqCabines', () => {
    it('should respond with a 200 status and a list of cabines', async () => {
        const res = await request(app).get('/compagnie/reqCabines');
        expect(res.status).toBe(200);
        expect(res.body).toEqual([
            {
                "cabine": "Economy"
            },
            {
                "cabine": "Premium Economy"
            },
            {
                "cabine": "Business"
            },
            {
                "cabine": "Première"
            }
        ]);
    });
});

describe("GET /compagnie/passengers/:id", () => {
    it("Should return a passenger with id 63b979bc74023f6a7623f829", async () => {
        const response = await request(app)
            .get("/compagnie/passengers/63b979bc74023f6a7623f829")
            .expect(200);

        expect(response.body).toMatchObject({
            _id: "63b979bc74023f6a7623f829"
        });
    });

    it("Should return an error when a passenger with id 123456789012 doesn't exist", async () => {
        const response = await request(app)
            .get(" ")
            .expect(500);

        expect(response.body).toMatchObject({
            error: "Internal error"
        });
    });
});

describe('GET /compagnie/reqFlights', () => {
    test('Should return 400 if no departure date', async () => {
        const response = await request(app).get('/compagnie/reqFlights');
        expect(response.status).toBe(400);
        expect(response.text).toBe('Please give a departure date');
    });

    test('Should return 400 if no cabin specified', async () => {
        const response = await request(app).get('/compagnie/reqFlights?departureDate=2023-07-31');
        expect(response.status).toBe(400);
        expect(response.text).toBe('Please specify a cabin class');
    });

    test('Should return 400 if no nbPassengers specified', async () => {
        const response = await request(app).get('/compagnie/reqFlights?departureDate=2023-07-31&cabin=f');
        expect(response.status).toBe(400);
        expect(response.text).toBe('Please give a number of passengers');
    });

    test('Should return 400 if no departureAirport and no arrivalAirport specified', async () => {
        const response = await request(app).get('/compagnie/reqFlights?departureDate=2023-07-31&cabin=f&nbPassengers=4');
        expect(response.status).toBe(400);
        expect(response.text).toBe('Please give a departure airport and an arrival airport');
    });

    test('Should return 400 if bad date format', async () => {
        const response = await request(app).get('/compagnie/reqFlights?departureDate=2023-07-3&cabin=f&nbPassengers=4&departureAirport=3682&arrivalAirport=3830');
        expect(response.status).toBe(400);
        expect(response.text).toBe('Please respect the date format YYYY-MM-DD');
    });

    test('Should return 400 if bad cabin format', async () => {
        const response = await request(app).get('/compagnie/reqFlights?departureDate=2023-07-31&cabin=d&nbPassengers=4&departureAirport=3682&arrivalAirport=3830');
        expect(response.status).toBe(400);
        expect(response.text).toBe('Please specify a correct cabin class (e,p,b or f)');
    });

    test('Should return 400 if incorrect askToken', async () => {
        const response = await request(app).get('/compagnie/reqFlights?departureDate=2023-07-31&cabin=p&nbPassengers=4&departureAirport=3682&arrivalAirport=3830&askToken=123');
        expect(response.status).toBe(400);
        expect(response.text).toBe('Incorrect search token');
    });

    test('Should return 200 with the expected result with token', async () => {
        const response = await request(app).get('/compagnie/reqFlights?departureDate=2023-07-31&departureAirport=3682&arrivalAirport=3830&nbPassengers=4&cabin=f&askToken=63d98b13731d40fce666cb33');
        const expectedResult = {
            "request": [
                {
                    "_id": "63989842f0298246cc397fed",
                    "airport_departure": 3682,
                    "airport_arrival": 3830,
                    "date_departure": "2023-07-31T00:00:00.000Z",
                    "date_arrival": "2023-08-01T00:00:00.000Z",
                    "time_departure": 480,
                    "time_arrival": 670,
                    "duration": 190,
                    "aircraft": 9586237,
                    "price_first": 1500
                },
                {
                    "_id": "6398a55db40bf28c593d5bb7",
                    "airport_departure": 3682,
                    "airport_arrival": 3830,
                    "date_departure": "2023-07-31T00:00:00.000Z",
                    "date_arrival": "2023-08-01T00:00:00.000Z",
                    "time_departure": 480,
                    "time_arrival": 670,
                    "duration": 190,
                    "aircraft": 9586237,
                    "price_first": 850
                },
                {
                    "_id": "6398a817b40bf28c593d5bff",
                    "airport_departure": 3682,
                    "airport_arrival": 3830,
                    "date_departure": "2023-07-31T00:00:00.000Z",
                    "date_arrival": "2023-08-01T00:00:00.000Z",
                    "time_departure": 480,
                    "time_arrival": 670,
                    "duration": 190,
                    "aircraft": 9586237,
                    "price_first": 1000
                }
            ]};
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(expectedResult);
    });
});

describe('POST /compagnie/trip/:askToken/submitBooking', () => {
    it('Should return a status code of 200 and status "OK" if booking is successful', async () => {
        const askToken = '63d98b13731d40fce666cb33';
        const response = await request(app)
            .post(`/compagnie/trip/${askToken}/submitBooking`)
            .send({
                flight: 'A123',
                class: 'Economy',
                passengers: 3
            });
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
    });
    it('Should return a status code of 400 and status "ERROR" with error details if booking is not successful', async () => {
        const askToken = '63d98b13731d40fce666cb33';
        const response = await request(app)
            .post(`/compagnie/trip/${askToken}/submitBooking`)
            .send({
                class: 'Economy',
                passengers: 3
            });
        expect(response.statusCode).toBe(400);
        expect(response.body.status).toBe('ERROR');
        expect(response.body.error).toContainEqual({field: 'flight', errorType: "Client did not provide flight number", input: undefined});
    });
});

describe('GET /compagnie/trip/:askToken/validate', () => {
    it('should return status 200 and the trip file with updated status', async () => {
        const response = await request(app)
            .get('/compagnie/trip/63d98b13731d40fce666cb33/validate')
            .expect(200);

        expect(response.body[0]).toHaveProperty('status', 'validated');
    });

    it('should return status 500 and error message on internal error', async () => {
        const response = await request(app)
            .get('/compagnie/trip/INVALID_ID/validate')
            .expect(500);

        expect(response.body).toHaveProperty('error', 'Internal error');
    });
});