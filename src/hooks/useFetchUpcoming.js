import { useEffect, useState } from "react"
import MovieService from "../services/MovieService";

const useFetchUpcoming = () => {
    const [data,setData] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        MovieService.getUpcoming()
        .then(response=> {
            setData(response.data.results)
            setTotalPages(response.data.total_pages)
        })
        .catch(error=> {
            console.log('Error fetching movies:', error);
            
        })
        .finally(() => {
            setLoading(false)
        })
    }, [page])

    const nextPage = () => {
        if(page < totalPages)
            setPage(prevPage => prevPage + 1)
    }

    const prevPage = () => {
        if(page > 1)
            setPage(prevPage => prevPage - 1)
    }
    return { data, page, totalPages, loading, nextPage, prevPage }
}

export default useFetchUpcoming;