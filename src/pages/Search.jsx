import useFetchSearch from "../hooks/useFetchSearch";
import { useSearchParams, Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import Backup from "../assets/images/backup.png"; 

const Search = () => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    const { data: searchResults } = useFetchSearch();

    useTitle(`Search results for ${queryTerm}`);

    return (
        <div className="md:p-90 md:pt-0 pt-0">
            <p className="text-white md:text-xl flex md:ml-35 p-5 pb-10 md:pb-0">
                {searchResults.length === 0
                    ? `No result found for ${queryTerm} :`
                    : `Result for ${queryTerm} :`}
            </p>
            <div className="grid grid-cols-5 w-full p-5 md:p-40 md:pt-15 pt-0 gap-5">
                {searchResults.map((movie) => {
                    const image = movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : Backup;

                    return (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <img
                                src={image}
                                alt={movie.original_title || "Movie Poster"}
                                className="h-full w-full rounded-xl"
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;