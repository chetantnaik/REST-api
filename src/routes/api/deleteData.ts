const expressDeleteData = require('express');
const deleteRouter = expressDeleteData.Router();
const statesDelete = require('../../models/States');

//DELETE request
deleteRouter.delete('/states/:id',async (req,res)=>{
  try{
    let data = await statesDelete.deleteOne({_id:req.params.id})
    res.status(200).json({msg:`Feature with id of ${req.params.id} deleted successfully!`});
  }catch(err){
    res.status(400).json({msg:err})
  };
});

//export the router
module.exports = deleteRouter;