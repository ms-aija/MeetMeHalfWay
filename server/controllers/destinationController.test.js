/* eslint-disable no-undef */
const express = require('express');
const router = require('../router');
const supertest = require('supertest');
const Destination = require('../models/destinations');

const mongoose = require('mongoose');
const databaseName = 'test';

describe('Integration tests', () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  beforeAll(async () => {
    const url = `${databaseName}`;
    await mongoose.connect(url, { useNewUrlParser: true });
  });

  afterEach(async () => {
    await Destination.deleteMany();
  });

  it('should save a topic to the database', async (done) => {
    const title = 'This is a test topic';
    const res = await request.post('/destinations').send({ title });

    const destination = await Destination.findOne({ title });
    expect(destination.title).toBe(title);
    done();
  });
});
