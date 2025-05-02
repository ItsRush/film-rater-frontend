import Categories from "../components/Categories";
import useFetchPopular from "../hooks/useFetchPopular";
import useTitle from "../hooks/useTitle";

const MoviesPopular = ({ title }) => {
    const { data: popularMovies, page, totalPages, loading, nextPage, prevPage } = useFetchPopular();

    useTitle(`${title}`);

    if (loading) return <p className="text-center text-white">Loading...</p>;

    return (
        <>
            <div>
                <div className="md:p-90 p-5 md:pt-0">
                    {/* Movies Grid */}
                    <div className="grid md:grid-cols-5 grid-cols-3 w-full md:p-40 pt-0 gap-5">
                        {popularMovies.map((movie) => (
                            <Categories key={movie.id} movie={movie} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-5 space-x-4 p-10 md:p-0 text-xs md:text-xl">
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
                        <span className="text-white text-[10px] md:text-xl flex whitespace-nowrap  ">
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
            </div>
        </>
    );
};

export default MoviesPopular;