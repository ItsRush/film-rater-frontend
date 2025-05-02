import { Link } from "react-router-dom";



const MovieCard = ({movie}) => {
    if(!movie || movie.length == 0){
        return null;
    }
    const { title , id , backdrop_path , release_date, overview} = movie;
    const image = `https://image.tmdb.org/t/p/original/${backdrop_path}`
    const date = new Date(release_date)

    return (
        <div className="flex justify-items-center items-center  md:w-full "> 
            <div className="group relative">
                <Link to="upcoming">
                    <img src={image} className=" md:h-80 max-w-screen md:w-5xl md:rounded-2xl object-cover object-[center_30%] shadow-lg/40 " />
                </Link>
                <div className="bg-black/20 text-white hover:text-shadow-lg/20 absolute left-10 bottom-10 shadow-black shadow-2xl rounded-2xl p-5 opacity-0 invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-1000 ease-in-out">
                    <Link to={`/movie/${id}`}>
                        <p className="mb-1 text-md ">{title}</p> 
                    </Link>
                    <p className="mb-3 text-xs ">{date.getFullYear()}</p> 

                    
                    <p className="text-sm font-light  w-100">{overview}</p> 
                </div>
            </div>
        </div>
    )
}

export default MovieCard;