import foodModel from "../models/foodModel.js";
import fs from 'fs'
import path from "path"

// add food item
const addFood= async(req,res)=>{
    
let image_filename=`${req.file.filename}`;
const food=new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
})
try{
 await food.save();
 res.json({success:true,message:"Food Added"})
}
catch(error)
{
console.log(error)
res.json({success:false,message:"Error"})
}
}
//all food list
const listFood=async(req,res)=>{
try{
const foods=await foodModel.find({});
res.json({success:true,data:foods})
}
catch(error)
{
console.error(error);
res.json({success:false,message:"error"});
}
}
//remove food item
const removeFood=async(req,res)=>{
try {
    const food=await foodModel.findById(req.body.id);
      if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }
     fs.unlink(path.join('uploads', food.image), (err) => {
      if (err) {
        console.error("Error deleting image:", err);
      } else {
        console.log("Image deleted successfully");
      }
    });
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Food removed"})
} catch (error) {
    console.error(error)
    res.json({sucess:false,message:"error"})
}
}
export {addFood,listFood,removeFood};