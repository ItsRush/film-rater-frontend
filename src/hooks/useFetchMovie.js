import MovieService from "../services/MovieService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchMovie = () => {
    const { id,credits} = useParams()
    const [movie, setMovie] = useState(null)
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);

    useEffect(()=> {
        if(!id) {return console.log("Invalid Id: ", id,credits);
        }
        MovieService.getMovie(id)
        .then(response => 
            setMovie(response.data)
        ) 
        .catch(error => {
            console.error('Error fetching movies:', error);
        });

        MovieService.getCredits(id)
        .then(response => {
            const crewData  = response.data.crew
            const castData = response.data.cast

            setCrew(crewData)
            setCast(castData)     
    }) 
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
    }, [id])


 

    return { movie, cast, crew}
}

export default useFetchMovie;