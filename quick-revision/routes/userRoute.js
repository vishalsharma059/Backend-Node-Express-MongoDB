import express from "express";
import { register } from "../controllers/userController";

const router = express.router();

router.post("/create", register);