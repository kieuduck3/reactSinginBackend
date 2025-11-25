const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const createUserService = async (name, email, password) => {
  try {
    // hash user password
    const hashPassWord = await bcrypt.hash(password, saltRounds);
    //  save user database
    let result = await User.create({
      name: name,
      email: email,
      password: hashPassWord,
      role: "kieuduc",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,
};
