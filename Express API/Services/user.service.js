const userModel = require("../Models/user.models");

// when create a service -- when you want to change into database

// thrid validation --> check all field are not blank

module.exports.createUser = async ({ username, email, password, role})=>{
    if (!username || !email || !password) {
        throw new Error("All Filed Are Required");
    }

    const user = await userModel.create({ username, email, password, role});

    return user;
};

// upadate data
module.exports.updateUser = async ({userId, username, email}) => {
    const updatedUser = await userModel.findOneAndUpdate({_id: userId}, {username, email}, {new: true})

    if(!updatedUser){
        throw new Error("User Not Found");
    }

    return updatedUser;
}