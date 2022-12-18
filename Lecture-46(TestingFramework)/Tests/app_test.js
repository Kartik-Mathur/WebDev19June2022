const {expect} = require('chai');
const app = require('../app');
const axios = require('axios');

let server;
describe('app_test',()=>{
    before(()=>{
        server = app.listen(4444);
    })

    it('checking request at /hello',(done)=>{
        axios.get('http://localhost:4444/hello')
        .then((data)=>{
            // console.log(data.data);
            expect(data.data).to.equal('hello');
            done();
        }).catch(err=>done(err));
    })

    it('checking /fare?km=10&min=50',(done)=>{
        axios.get('http://localhost:4444/fare?km=10&min=50')
        .then((data)=>{
            // console.log(data);
            expect(data.data).to.equal(280);
            done();
        })
        .catch(er=>done(er));
    })

    after(()=>{
        server.close();
    })

})