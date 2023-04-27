const expressHandler = require("express-async-handler");
const Registers = require("../db/model");

const getRegisters = expressHandler (async (req, res) => {
   const register = await Registers.find();
   if(!register){
    res.status(500).json({error:"No register"});
   }
   res.status(200).json(register);
}) 
const getOneRegisters = expressHandler (async (req,res) => {
    const register = await Registers.findById(req.params.id);
    if(!register){
     res.status(500).json({error:"No register found"});
    }
    res.status(200).json(register);
 }) 
const postRegisters = (async (req,res) => {

    const register = await Registers.insertMany({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword
    });
    if(!register){
        res.status(500).json({message:"No Registerted"});
    }
    res.status(200).json(register);
})

const postOne = expressHandler(async (req, res) => {
    const {email, password} = req.body;
    const register = await Registers.findOne({
        
        email: email,
        password:password,
       
    });
    if(!register){
        res.status(400).json({"No Data":"No Found"});
    }
    res.status(200).json(register);
})

   
const updateRegisters = expressHandler(async (req, res) => {
    const register = await Registers.findByIdAndUpdate({_id: req.params.id},{
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword
    },
  {
    new: true,
  }  
    );
    if(!register){
        res.status(500).json({message:"No Id Updated"});
    }
    res.status(200).json(register);
})
const deleteRegisters = expressHandler(async (req, res) => {
    const register = await Registers.findByIdAndDelete(req.params.id);
    if(!register){
        res.status(500).json({message:"No Id Deleted"});
    }
    res.status(200).json(register);
})
module.exports = {getRegisters, postRegisters, updateRegisters, deleteRegisters,getOneRegisters, postOne};