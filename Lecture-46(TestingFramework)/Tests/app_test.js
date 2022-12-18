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

    after(()=>{
        server.close();
    })

})