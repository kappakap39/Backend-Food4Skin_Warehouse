import express from "express";
import {showTableagent, addagent, getupdateAgent, agentUpdate, getAgent, NameAgent, NameAgentAD} from "../controller/agent.js"

const router = express.Router();

//http://localhost:2001/showTableagent
router.get("/showTableagent",showTableagent);

//http://localhost:2001/addagent
router.post("/addagent",addagent);

//http://localhost:2001/getAgent/:id
router.get("/getAgent/:id",getAgent);

//http://localhost:2001/getupdateAgent/:id
router.get("/getupdateAgent/:id",getupdateAgent);

//http://localhost:2001/agentUpdate/:id
router.put("/agentUpdate/:id",agentUpdate);

//http://localhost:2001/NameAgent
router.get("/NameAgent",NameAgent);

//http://localhost:2001/NameAgentAD/:id
router.get("/NameAgentAD/:id",NameAgentAD);

export default router