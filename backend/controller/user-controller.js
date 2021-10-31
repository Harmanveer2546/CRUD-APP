import { request, response } from "express";
import user from "../model/user-schema.js";

export const getUsers=async(request,response)=>{
    try{
        const users = await user.find();
        response.status(200).json(users);
    }

    catch(error){

        response.status(404).json({ message: error.message })
    }
}


export const addUsers=async(request,response)=>{
    const User = request.body;
    console.log("inside")

    const newUser = new user(User);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }


    
}


export const getUserById=async(request,response)=>{
    const id=request.params.id  ;
  try{

   const User= await user.findById(id)   ;

   response.json(User)   ;



  }

  catch(error){
    response.status(409).json({ message: error.message});     


  }







}

export const editUser = async (request, response) => {
    let User = await user.findById(request.params.id);
    User = request.body;

    const editUser = new user(User);
    try{
        await user.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
   
export const deleteUser = async (request, response) => {
    try{
        await user.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}