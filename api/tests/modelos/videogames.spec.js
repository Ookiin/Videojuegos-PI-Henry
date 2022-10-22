const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super' });
      });
    });
    describe('platform', () => {
      it('should throw an error if platform is null', (done) => {
        Videogame.create({})
        .then(() => done(new Error('It requires a platform')))
        .catch(() => done());
      });
      it('should work when its a valid platform', () => {
        Videogame.create({ platform: 'Xbox' });
      });
    });
    describe('rating', () => {
      it('should work when its a valid rating', () => {
        Videogame.create({ rating: 4 });
      });
    });
    describe('reldate', () => {
      it('should work when its a valid reldate', () => {
        Videogame.create({ reldate: "11-06-1984" });
      });
    });
    describe('description', () => {
      it('should throw an error if description is null', (done) => {
        Videogame.create({})
        .then(() => done(new Error('It requires a desciption')))
        .catch(() => done());
      });
      it('should work when its a valid description', () => {
        Videogame.create({ description: "Este es un testing del PI" });
      });
    });
  });
});
