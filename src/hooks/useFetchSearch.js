import MovieService from "../services/MovieService";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useFetchSearch = () => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q")


    const [data,setData] = useState([]);

        useEffect(()=> {
            if(!queryTerm) return
            MovieService.getSearch(queryTerm)
            .then(response => {
              setData(response.data.results)
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
        }, [queryTerm])

 return { data }
}

export default useFetchSearch;