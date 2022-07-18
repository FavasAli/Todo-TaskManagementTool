import Data from "../model/productModel.js";
import asyncHandler from "express-async-handler";

const createData = asyncHandler(async (req, res) => {
  const { todo,date ,completion} = req.body;
  const user = req.params.id;
  if (!user) {
    res.status(401);
    throw new Error("Not authorized,please login");
  }

  const createdData = await Data.create({
    user,
    todo,
    date,
    completion
  });

  if (createdData) {
    res.status(201).json({
        _id:createdData._id,
        user:createdData.user,
        todo:createdData.todo,
        date:createdData.date,
        completion:createdData.completion

    });
  }else
  {
    throw new Error("data not created")
  }
});


const fetchDataById=asyncHandler(async(req,res)=>{
    const user=req.user._id
    const datas=await Data.find({user})
    if(datas){
        res.json(datas)
    }
})

export {createData,fetchDataById}
