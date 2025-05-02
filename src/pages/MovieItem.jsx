import { useState, useEffect } from "react";
import useFetchMovie from "../hooks/useFetchMovie";
import Backup from "../assets/images/backup.png";

const MovieItem = () => {
    const { movie, cast, crew } = useFetchMovie();
    const [active, setActive] = useState("overview");

    useEffect(() => {
        if (movie && movie.title) {
            document.title = `${movie.title}`;
        }
    });

    const [showAll, setShowAll] = useState(false);

    if (!movie) {
        return null; 
    }

    const image = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
        : Backup;
    const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : Backup;

    const genres = movie.genres;
    const date = new Date(movie.release_date);
    const today = new Date();
    const director = crew.find((person) => person.job === "Director");
    const max = 14;
    const visibleCast = showAll ? cast : cast.slice(0, max);
    const hasHidden = cast.length > max;

    return (
        <div>
            <div className="grid grid-cols-2 rounded-2xl md:max-w-450 m-auto md:shadow-xl mb-50">
                <div className="text-white md:p-30">
                    <div className="md:text-xl text-[10px] pl-5 md:pl-0 mt-10 md:mt-0">
                        <strong className="md:text-2xl md:p-0">{movie.title}</strong>{" "}
                        <a className="md:ml-2 md:mr-2 md:text-sm">by </a>
                        <a className="text-gray-500">
                            {director ? director.name : "Unknown Director"}
                        </a>
                    </div>

                    <p className="pt-2 p-5 md:p-0 text-gray-500 text-xs md:text-sm text-[10px]">
                        {today < date ? `coming out: ${date.toDateString()}` : date.getFullYear()}
                    </p>

                    <div className="grid grid-cols-2 mt-10 md:p-0 p-5">
                        <img
                            src={poster}
                            alt={`${movie.title} Poster`}
                            className="md:w-50 md:h-75 rounded-xl md:mb-5 mb-3"
                        />
                        <ul className="grid grid-cols-2 text-xs md:pl-0 pl-10 md:gap-x-0 gap-x-26 md:text-xl">
                            <li>
                                <button
                                    className={`hover:cursor-pointer ${
                                        active === "overview" ? "text-white" : "text-gray-500"
                                    }`}
                                    onClick={() => setActive("overview")}
                                >
                                    Overview
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`hover:cursor-pointer ${
                                        active === "cast" ? "text-white" : "text-gray-500"
                                    }`}
                                    onClick={() => setActive("cast")}
                                >
                                    Cast
                                </button>
                            </li>
                        </ul>

                        {/* Genres Section */}
                        <div className="flex flex-wrap text-center whitespace-nowrap md:gap-x-2 gap-x-1 gap-y-1 md:gap-y-2 md:w-49">
                            {genres.map((genre) => (
                                <span
                                    key={genre.id}
                                    className="text-white bg-[#051b44] md:p-2 p-1 md:rounded-xl rounded-md font-light md:text-xs text-[6px]"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Overview & Cast */}
                    <div className="md:ml-60 md:-mt-70 -mt-60">
                        {active === "overview" && (
                            <div className="font-light w-[200px] md:w-full ml-32 md:ml-0 md:mt-0 mt-30 min-h-[150px] max-h-[300px] md:max-h-[400px] overflow-y-auto text-[10px] md:text-[17px]">
                                <p>{movie.overview || "No overview available for this movie."}</p>
                            </div>
                        )}
                        {active === "cast" && (
                            <div className="ml-32 md:ml-0 md:mt-0 mt-30 grid grid-cols-2 md:max-h-[400px] max-h-[300px] overflow-y-auto w-full">
                                {visibleCast.map((actor) => (
                                    <div
                                        className="text-white md:text-[12px] rounded-xl md:m-1 whitespace-nowrap text-[8px]"
                                        key={actor.id}
                                    >
                                        {actor.name}
                                    </div>
                                ))}
                            </div>
                        )}
                        {active === "cast" && hasHidden && (
                            <div className="md:-ml-2 ml-28">
                                {!showAll ? (
                                    <button
                                        onClick={() => setShowAll(true)}
                                        className="text-[10px] w-20 text-gray-500 cursor-pointer"
                                    >
                                        Show More
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setShowAll(false)}
                                        className="text-[10px] w-20 text-gray-500 cursor-pointer"
                                    >
                                        Show Less
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="h-fit">
                    <img
                        src={image}
                        alt={`${movie.title} Backdrop`}
                        className="md:rounded-2xl object-cover w-full md:h-200 h-30 mask-l-from-60% mask-l-to-100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieItem;