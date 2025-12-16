import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
//CA2
import { getUpcomingMovies } from '../tmdb-api';
import { getGenres } from '../tmdb-api';

const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));


// upcoming movies to be added
router.get('/upcoming', asyncHandler(async (req, res) => {
    const movies = await getUpcomingMovies();
    res.status(200).json(movies);
}));

// genres to be added
router.get('/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));



export default router;



