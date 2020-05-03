const expressQueryData = require('express');
const queryRouter = expressQueryData.Router();
const statesQuery = require('../../models/States'); //States schema

//GET request
queryRouter.get('/states',async (req,res)=>{
  try{
    let data = await statesQuery.find(req.query).limit(10);
    if(data.some((dbResp)=>dbResp)){ 
      res.status(200).json(data);
    }else{
      res.status(400).json({message:`No features found!`})
    }
  }catch(err){
    res.status(500).json({message:err});
  }
});

//export the router
module.exports = queryRouter;