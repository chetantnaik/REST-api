const expressPatchData = require('express');
const patchRouter = expressPatchData.Router();
const statesPatch = require('../../models/States');

//PATCH request
patchRouter.patch('/states/:id',async (req,res)=>{
  try{
    let data = await statesPatch.updateOne({_id:req.params.id},req.body);
    res.status(200).json({msg:`Feature with id of ${req.params.id} updated successfully!`})
  }catch(err){
    res.status(400).json({msg:err})
  }
});

module.exports = patchRouter;