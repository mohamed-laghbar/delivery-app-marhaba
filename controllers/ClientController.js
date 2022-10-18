const User = require('../models/User');
const bcrypt = require('bcryptjs');


const registerClient =async (req, res , next)=>{

    const {name,email,password}= req.body;
    if(!name || !email || !password){
        res.json({message: 'please fill all the feilds'})
    }


    const existUser = await User.findOne({email})

    if(existUser){
        res.status(400)
        throw new Error('User already exists')
    } 

    const hachedPassword =await bcrypt.hash(password,10)

     const user = await User.create({
    name,
    email,
    password: hachedPassword,
    })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
    

}








module.exports = {registerClient}