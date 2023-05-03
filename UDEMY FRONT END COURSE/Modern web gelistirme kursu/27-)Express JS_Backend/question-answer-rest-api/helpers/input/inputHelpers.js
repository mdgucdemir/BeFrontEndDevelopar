
const bcrypt = require("bcryptjs");
const validateUserInput = (email,password) =>{
    return email && password;
}

const comparePassword = (password,hashedPassword) => {
    
    //bcrypt in burada senkron version u kullacagiz. Bu sadece farkli version lar kullanimi hakkinda tecrube edinmek icin
    return bcrypt.compareSync(password,hashedPassword);
    // yukaridaki yazimda [ password ile hashedPassword ] ayni ise true degilse false donucek
}


module.exports = {
    validateUserInput,
    comparePassword,
    
}