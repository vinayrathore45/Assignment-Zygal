const User = require("../models/userModel");

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value != "string") return false;
  return true;
};

const registerUser = async (req, res) => {
    try{
  const { userName, password } = req.body;

  if (Object.keys(req.body).length < 1)
    return res
      .status(400)
      .send({ status: false, message: "Request must not be Empty" });

  if (!isValid(userName))
    return res
      .status(400)
      .send({ status: false, message: "Please Enter useName" });
  

    const isDuplicated = await User.findOne({userName});

    if(isDuplicated) res.status(409).send({status:false, message:'user is already exist with this userName'});

  if (!isValid(password))
    return res
      .status(400)
      .send({ status: false, message: "Please Enter Password" });

 
      const createdUser = await User.create(req.body);

      return res.status(201).send({status: true, message:"user Created Successfully", data: createdUser})
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
};


const loginUser = async (req,res) => {
    try{
    let{userName,password} = req.body;
    if (Object.keys(req.body).length < 1)
    return res
      .status(400)
      .send({ status: false, message: "Request must not be Empty" });


    if(!isValid(userName)) return res.status(400).send({status: false, message: "userName  is missing"});

    const findUser = await User.findOne({userName,password});

    if(!findUser) return res.status(404).send({status:false, message:'User not found'});

    return res.status(200).send({status:true, message:"LoggedIn Successfully",user:findUser});
}
catch (error) {
    return res.status(500).send({ status: false, message: error.message })
}
}


module.exports = {registerUser,loginUser};