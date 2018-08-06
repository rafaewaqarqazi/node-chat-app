const expect = require('expect');
const {User} = require('./users');

describe('Users',()=>{

    beforeEach(()=>{
        users = new User();
        users.users=[{
            id:'1',
            name:'A',
            room:'Room A'
        },{
            id:'2',
            name:'B',
            room:'Room B'
        },{
            id:'3',
            name:'C',
            room:'Room A'
        }];
    });

    it('Should add new User',()=>{
        var users = new User();

    var user = {
        id:'123',
        name:'Test Name',
        room:'Test Room'
    }

    var resUser = users.addUser(user.id,user.name,user.room);

    expect(users.users).toMatchObject([user]);
    });


    it('should find user',()=>{
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe('2');
    });

    it('should not find user',()=>{
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toBeUndefined();
    });

    it('should remove user',()=>{
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user',()=>{
        var userId = '99';
        var user = users.removeUser(userId);

        
        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    });
    it('should return users list of Room A',()=>{
        
        var userList = users.getUserList('Room A');

        expect(userList).toMatchObject(['A','C']);
    });

});