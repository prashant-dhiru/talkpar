const assert = require('assert');
const expect = require('chai').expect;
const io = require('socket.io-client');

const socketOption = {
    'reconnection delay' : 0
    , 'reopen delay' : 0
    , 'force new connection' : true
};

describe('Suite of unit tests', function() {

    let socket;

    before(function(done) {
        // Setup
        socket = io.connect('http://localhost:3000', socketOption);
        socket.on('connect', function() {
            done();
        });
    });

    after(function(done) {
        // Cleanup
        if(socket.connected) {
            socket.disconnect();
        }
        done();
    });
 
    describe('First (hopefully useful) test', function() {
        it('connect to server', function(done) {
            socket.on('hello', function(data) {
                expect(data).to.equal('word');
                done();
            });
        });
    });

});