class User{
    constructor(){
        this.users= [];
    }

    addUser(id, name, room){
        var user = {id,name,room};
        this.users.push(user);
        return user;
    }
    
    removeUser(id){
        var user = this.getUser(id);

        if(user){
            this.users = this.users.filter((user)=>user.id !== id);
        }

        return user;

    }
    getUser(id){
        return this.users.filter((user)=>user.id===id)[0];
    }
    getUserList(room){
        var users =this.users.filter((user)=>user.room === room);
        var namesArrray = users.map((user)=>user.name);
        return namesArrray;
    }

}

module.exports = {User}