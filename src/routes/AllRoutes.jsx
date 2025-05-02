import { Routes, Route, Navigate} from "react-router-dom";
import { Movies, Library, MovieItem, MoviesPopular, Search, MoviesUpcoming, PageNotFound} from '../pages'

const AllRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Navigate to ="/movies" replace title="Movies"/>}/>
            <Route path="movies" element={<Movies title="Movies"/>}/>
            <Route path="movie/:id" element={<MovieItem />}/>
            <Route path="movies/popular" element={<MoviesPopular to="movie/popular" title="Popular"/>}/>
            <Route path="movies/upcoming" element={<MoviesUpcoming to="movie/upcoming" title="Upcoming"/>}/>
            <Route path="search" element={<Search to="search/movie"/>}/>
            <Route path="mylibrary" element={<Library  title="My Library"/>}/>
            <Route path="*" element={<PageNotFound  title="Page not Found"/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes;