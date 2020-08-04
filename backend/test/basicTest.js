const assert = require('assert');
const expect = require('chai').expect;
const io = require('socket.io-client');

const socketOption = {
    'reconnection delay' : 0
    , 'reopen delay' : 0
    , 'force new connection' : true
};

describe('Suite of unit tests', function() {

    let client1;

    beforeEach(function(done){
        client2 = io.connect('http://localhost:3000', socketOption);

        client2.on('connect', function() {
            done();
        });
    });

    afterEach(function(done) {
        // Cleanup
        
        if(client2.connected) {
            client2.disconnect();
        }
        done();
    });
 
    describe('First (hopefully useful) test', function() {
        it('client1 connect to server', function(done) {
            client1 = io.connect('http://localhost:3000', socketOption);
            client1.on('connect', function(data){
                client1.on('hello', function(data) {
                    try{
                        client1.disconnect();
                        expect(data).to.equal('word');
                        done();
                    }
                    catch(e){
                        done(e);
                    }
                });
            })
        });

        it('client2 connect to server', function(done) {
            client2.on('hello', function(data) {
                expect(data).to.equal('world');
                done();
            });
        });
    });
});