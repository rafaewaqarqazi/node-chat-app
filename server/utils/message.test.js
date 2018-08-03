var expect = require('expect');
var {generateMessage} = require('./message');
describe('generateMessage',()=>{
    it('Should generate correct message object',()=>{
        var from ='Rafae';
        var text = 'Some Message';
        var message= generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    });
});