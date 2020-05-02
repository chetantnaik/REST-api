const expressQueryData = require('express');
const queryRouter = expressQueryData.Router();
const statesQuery = require('../../models/States'); //States schema

//GET request
queryRouter.get('/states',async (req,res)=>{
  try{
    let statesResp = await statesQuery.find(req.query).limit(10);
    res.status(200).json(statesResp);
  }catch(err){
    res.status(400).json({msg:err});
  }
});

//export the router
module.exports = queryRouter;