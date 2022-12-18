const calculateFare = require('../fare');
const {expect} = require('chai');

describe('fare_test',()=>{
    it('fare should be 80 for 5km, 20min',()=>{
        let fare = calculateFare(5,20);
        expect(fare).to.be.a('number');
        expect(fare).to.equal(80);
    })
    it('fare should be 190 for 10km, 50min',()=>{
        let fare = calculateFare(10,50);
        expect(fare).to.be.a('number');
        expect(fare).to.equal(280);
    })
    it('fare should be 25 for 1km, 10min',()=>{
        let fare = calculateFare(1,10);
        expect(fare).to.be.a('number');
        expect(fare).to.equal(25);
    })
})