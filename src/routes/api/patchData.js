const expressPatchData = require('express');
const patchRouter = expressPatchData.Router();
const statesPatch = require('../../models/States'); //States schema

//PATCH request
patchRouter.patch('/states/:id',async (req,res)=>{
  try{
    let features = await statesPatch.find({_id:req.params.id});
    if(features.some((dbResp)=>dbResp)){
      let data = await statesPatch.updateOne({_id:req.params.id},req.body);
      res.status(200).json({message:`Feature with id of ${req.params.id} updated successfully!`})
    }else{
      res.status(400).json({message:`No feature with id of ${req.params.id} found!`})
    }
  }catch(err){
    res.status(500).json({message:err})
  }
});

module.exports = patchRouter;