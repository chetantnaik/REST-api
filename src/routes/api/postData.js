const expressPostData = require('express');
const postRouter = expressPostData.Router();
const statesPost = require('../../models/States'); //States schema

//POST request
postRouter.post('/states',async (req,res)=>{
  //Create an object from the Mongoose schema
  let data = new statesPost({
    area:req.body.area,
    name:req.body.name,
    region:req.body.region,
    state_abbr:req.body.state_abbr,
    population:req.body.population
  });
  //save the data in the database
  try{
    let statesResp = await data.save(req.body);
    res.status(200).json(statesResp);
  }catch(err){
    res.status(400).json(err);
  }
});

//Export router
module.exports = postRouter;