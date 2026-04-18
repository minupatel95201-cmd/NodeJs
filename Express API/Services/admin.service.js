// show all user logic

const userModel = require("../Models/user.models");

module.exports.getAllUser = async () => {
    const allUser = await userModel.find();

    return allUser;
}