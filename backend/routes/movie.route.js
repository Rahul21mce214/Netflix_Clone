
import express from "express";

import { getTrendingMovie } from "../controller/movie.controller.js";
import { getMovieTrailers } from "../controller/movie.controller.js";
import { getMovieDetails } from "../controller/movie.controller.js";
import { getSimilarMovies } from "../controller/movie.controller.js";
import { getMoviesByCategory } from "../controller/movie.controller.js";


const router= express.Router();



router.get("/trending", getTrendingMovie)
router.get("/:id/trailers", getMovieTrailers)
router.get("/:id/details", getMovieDetails)
router.get("/:id/similar", getSimilarMovies)
router.get("/:category/", getMoviesByCategory)




export default router;