import { expect } from 'chai';
import fetchPokemon from '../models/pokemonModal.js';
import dotenv from 'dotenv';

dotenv.config();

import request from 'supertest';
import app from '../server.js';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);


describe('Pokémon API', () => {
    it('should fetch Pokémon data for a valid name', (done) => {
        chai.request(app)
            .get('/api/pokemon/ditto')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('name').eql('ditto');
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('height');
                expect(res.body).to.have.property('weight');
                expect(res.body).to.have.property('types');
                expect(res.body).to.have.property('abilities');
                done();
            });
    });

    it('should return 404 for an invalid Pokémon name', (done) => {
        chai.request(app)
            .get('/api/pokemon/invalidname')
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('message').eql('Pokémon ikke fundet');
                done();
            });
    });

    it('should return 400 if no name is provided', (done) => {
        chai.request(app)
            .get('/api/pokemon/')
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('message').eql('Pokémon-navn skal angives i URL');
                done();
            });
    });
});
