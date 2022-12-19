const Text = require('../models/textModel');

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    if (typeof value != "string") return false;
    return true;
  };



  const newText = async (req,res) => {
try{
    const{content} = req.body;
    if (Object.keys(req.body).length < 1)
    return res
      .status(400)
      .send({ status: false, message: "Request must not be Empty" });

    if(!isValid(content))
    return res
    .status(400)
    .send({ status: false, message: "Content should be present" });


    const addText = await Text.create(req.body);

    return res.status(201).send({status:true, message:'New Topic Added Successfully',data:addText});

}
catch (error) {
    return res.status(500).send({ status: false, message: error.message })
}

  }


  const searchText = async (req,res) => {
    try{
        const content = req.query.content;
        if (Object.keys(req.query).length < 1)
        return res
          .status(400)
          .send({ status: false, message: "Request must not be Empty" });
    
    
          if (content != null) {
            if(!/^[a-zA-Z0-9]{1,30}$/.test(content) )return res.status(400).send({ status: false, message: "content should contain only alphabets" })
            filter.title ={$regex:content,$options:"i"}

        }
        const searchedText = await Text.find(content);
        return res.status(201).send({status:true, message:'text Founded',data:searchedText});


    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
  }

  module.exports = {newText,searchText}