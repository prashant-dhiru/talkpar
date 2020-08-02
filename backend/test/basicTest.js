const assert = require('assert');
const expect = require('chai').expect;
const io = require('socket.io-client');

describe('Suite of unit tests', function() {

    let socket;

    beforeEach(function(done) {
        // Setup
        socket = io.connect('http://localhost:3000', {
            'reconnection delay' : 0
            , 'reopen delay' : 0
            , 'force new connection' : true
        });
        socket.on('connect', function() {
            done();
        });
    });

    afterEach(function(done) {
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