const request = require('supertest');
const { server, app } = require('../index');
const mongoose = require('mongoose');

describe('GET api/tasks', () => {
    it('it should return 200 ok', async () => {
        const res = await request(app).get('/api/tasks')
        expect(res.statusCode).toBe(200);
    })
    it('it should return object and tasks property ok', async () => {
        const res = await request(app).get('/api/tasks')
        expect(Array.isArray(res.body)).toBe(true)
        expect(res.body.length).toBeGreaterThan(0)
        console.log(res.body, 'DATA SEEDED!')
    })
})

afterAll(async () => {
    await mongoose.connection.close();
    await server.close();
})