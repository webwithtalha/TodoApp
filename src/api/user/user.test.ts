import request from 'supertest';

import app from '../../app';

describe('GET /api/v1/users', () => {
  it('responds with an array of users', async () => {
    request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toBe(1);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('name');
        expect(response.body[0]).toHaveProperty('email');
        expect(response.body[0]).toHaveProperty('password');
      });
  });
});
