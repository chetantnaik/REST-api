const expressDeleteData = require('express');
const deleteRouter = expressDeleteData.Router();
const statesDelete = require('../../models/States'); //States schema

//DELETE request
deleteRouter.delete('/states/:id',async (req,res)=>{
  try{
    let features = await statesDelete.find({_id:req.params.id});
    if(features.some((dbResp)=>dbResp)){
      let data = await statesDelete.deleteOne({_id:req.params.id})
      res.status(200).json({message:`Feature with id of ${req.params.id} deleted successfully!`});
    }else{
      res.status(400).json({message:`No feature with id of ${req.params.id} found. Please verify the id and try again.`});
    }
  }catch(err){
    res.status(500).json({message:err})
  };
});

//export the router
module.exports = deleteRouter;