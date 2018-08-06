var moment = require('moment');

var generateMessage = (from,text)=>{
    return{
        from,
        text,
        createdAt:moment().valueOf()
    };
};

var generateLocationMessage = (from,latitude,logitude)=>{
    return{
        from,
        url:`https://www.google.com/maps?q=${latitude},${logitude}`,
        createdAt:moment().valueOf()
    };
};

module.exports = {generateMessage,generateLocationMessage};
