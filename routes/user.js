import express from "express"
import { getallusers, register, userparam, userquery } from "../controllers/user.js";
// const express=require("express");
// const {User}=require("../models/user.js")

const router=express.Router();

//Routes
router.get("/users/all",getallusers)
router.post("/users/new",register)


router.get("/users/:id",userparam)



router.get("/usersqueryroute/userid",userquery)


// router.route("/users/:id")
// .get(function names written in controllers)
// .post()
// .put()
// .delete()
//IF ROUTE IS SAME ONLY THE REQUESTS ARE DIFFERENT

export default router;
