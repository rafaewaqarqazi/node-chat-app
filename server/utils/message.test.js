var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');
describe('generateMessage',()=>{
    it('Should generate correct message object',()=>{
        var from ='Rafae';
        var text = 'Some Message';
        var message= generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    });
});

describe('generateLocationMessage',()=>{
    it('Should Generate Correct Location',()=>{
        var from = 'Rafae';
        var latitude = 33.6643383;
        var longitude = 73.0524319;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var locationMessage = generateLocationMessage(from,latitude,longitude);

        expect(typeof locationMessage.createdAt).toBe('number');
        expect(locationMessage).toMatchObject({from,url});
    });
});