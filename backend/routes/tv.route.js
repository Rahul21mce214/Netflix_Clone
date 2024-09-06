
import express from "express";

import { getTrendingTv } from "../controller/tv.controller.js";
import { getTvTrailers } from "../controller/tv.controller.js";
import { getTvDetails } from "../controller/tv.controller.js";
import { getSimilarTv } from "../controller/tv.controller.js";
import { getTvByCategory } from "../controller/tv.controller.js";



const router= express.Router();



router.get("/trending", getTrendingTv)
router.get("/:id/trailers", getTvTrailers)
router.get("/:id/details", getTvDetails)
router.get("/:id/similar", getSimilarTv)
router.get("/:category/", getTvByCategory)




export default router;