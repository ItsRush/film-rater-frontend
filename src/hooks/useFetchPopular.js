import MovieService from "../services/MovieService";
import { useEffect, useState } from "react";

const useFetchPopular = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1); // State for the current page
    const [totalPages, setTotalPages] = useState(0); // State for total pages
    const [loading, setLoading] = useState(false); // State for loading

    useEffect(() => {
        setLoading(true); // Set loading to true before fetching
        MovieService.getPopular(page) // Pass the current page to the service
            .then(response => {
                setData(response.data.results);
                setTotalPages(response.data.total_pages); // Set total pages from the response
            })
            .catch(error => {
                console.error("Error fetching movies:", error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false after fetching
            });
    }, [page]); // Re-fetch data when the page changes

    const nextPage = () => {
        if (page < totalPages) {
            setPage(prevPage => prevPage + 1); // Increment the page
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1); // Decrement the page
        }
    };

    return { data, page, totalPages, loading, nextPage, prevPage };
};

export default useFetchPopular;