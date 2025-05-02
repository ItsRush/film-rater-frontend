import useFetchUpcoming from "../hooks/useFetchUpcoming";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import Backup from "../assets/images/backup.png";

const MoviesUpcoming = ({ title }) => {
    const { data: upcomingMovies, page, totalPages, loading, nextPage, prevPage } = useFetchUpcoming();

    useTitle(`${title}`);

    if (!upcomingMovies || upcomingMovies.length === 0) {
        return <p className="text-white text-center">No upcoming movies available.</p>;
    }

    if(loading) return <p className="text-center text-white">Loading...</p>;

    return (
        <>
            <div className="md:p-90 p-5 md:pt-0">
                <div className="grid md:grid-cols-5 grid-cols-3 w-full md:p-40 pt-0 gap-5">
                    {upcomingMovies.map((movie) => {
                        const image = movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            : Backup;
                        return (
                            <Link to={`/movie/${movie.id}`} className="" key={movie.id}>
                                <img
                                    src={image}
                                    alt={movie.original_title}
                                    className="h-full w-full rounded-xl"
                                />
                            </Link>
                        );
                    })}
                </div>
                <div className="flex p-10 md:p-0 justify-center items-center mt-5 space-x-4 text-xs md:text-xl">
                        <button
                            onClick={(e) => {
                                e.preventDefault(); 
                                prevPage();
                            }}
                            disabled={page === 1}
                            className={`px-4 py-2 rounded-lg ${
                                page === 1
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-[#16498C] hover:text-sm text-white hover:cursor-pointer"
                            }`}
                        >
                            Previous
                        </button>
                        <span className="text-white text-[10px] md:text-xl whitespace-nowrap ">
                            Page {page} of {totalPages}
                        </span>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                nextPage();
                            }}
                            disabled={page === totalPages}
                            className={`px-4 py-2 rounded-lg ${
                                page === totalPages
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-[#16498C] hover:text-sm hover:cursor-pointer text-white"
                            }`}
                        >
                            Next
                        </button>
                    </div>
            </div>
        </>
    );
};

export default MoviesUpcoming;