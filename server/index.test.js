const app = require('./index');
const request = require('supertest');
const assert = require('assert');
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
