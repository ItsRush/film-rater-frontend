import MovieCard from '../components/MovieCard'
import Categories from '../components/Categories'
import useFetchUpcoming from '../hooks/useFetchUpcoming'
import useFetchPopular from "../hooks/useFetchPopular"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import useTitle from "../hooks/useTitle";

const Movies = ({title}) => {
    const { data: upcomingMovies } = useFetchUpcoming()
    const { data: popularMovies } = useFetchPopular()

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade,setFade] = useState(false);
    const showcasedMovies = upcomingMovies.slice(0,5)

    useTitle(`${title}`)
  

    const infiniteScroll = () => {
        if(showcasedMovies.length > 0) {
            setFade(true)
            setTimeout(()=>{
                setCurrentIndex((prevIndex) => (prevIndex + 1) % showcasedMovies.length )
                setFade(false);
            },300)
        }
    }

        useEffect(() => {
            const interval = setInterval(() => {infiniteScroll()} , 10000)
            return () => clearInterval(interval)
        }, [currentIndex, showcasedMovies])

        const handleLeftArrow = (event) => {
            event.preventDefault();
            if (showcasedMovies && showcasedMovies.length > 0) {
                setCurrentIndex((prevIndex) => (prevIndex === 0 ? showcasedMovies.length - 1 : prevIndex - 1));
            }
        }
        const handleRightArrow = (event) => {
            event.preventDefault();
            if (showcasedMovies && showcasedMovies.length > 0) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % showcasedMovies.length);
            }
        }

    return (
        <>
        <div className="flex justify-center items-center md:h-48  ">
             <button onClick={handleLeftArrow} className="p-1 bg-white/10 hover:bg-white/30 rounded-full mr-10 opacity-50 cursor-pointer invisible md:visible">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="gray" className="size-5 p-0.5 hover:stroke-3 hover:stroke-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                 </svg>
            </button>
             <div className={`transition-opacity duration-200 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                 {showcasedMovies
                 .slice(0,1)
                .map((movie)=>
                <MovieCard key={movie.id} movie={upcomingMovies[currentIndex]}/>
                )}
            </div>
            <button onClick={handleRightArrow} className=" p-1 bg-white/10 hover:bg-white/30 rounded-full ml-10 opacity-50 cursor-pointer invisible md:visible">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="gray" className="size-5 p-0.5 hover:stroke-3 hover:stroke-white transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            </div>
        <div className={`grid grid-cols-5 md:w-25 w-20 h-1 gap-2 m-auto md:mt-20 mt-5`}>
            {showcasedMovies.map((showcasedMovies, index) => ( 
            <button key={index} className={`hover:opacity-50 hover:cursor-pointer rounded-md ${currentIndex === index ? 'bg-[#16498C]' : 'bg-white/20'}`}
            onClick={()=>setCurrentIndex(index)}></button>
           ))}
        </div>

      <div className="">
        <div className=" md:pt-50 pt-20 p-5 m-auto md:mb-50">
            <Link to="popular" className="block text-center md:mr-200 md:text-xl text-xs text-white">Popular</Link>
                 <div className="grid md:grid-cols-5 max-w-screen-lg mx-auto md:w-full m-auto md:pt-5 p-20 pt-0 md:gap-5 gap-2">
                {popularMovies
                .slice(9,14)
                .map((movie) => (
                    <Categories key={movie.id} movie={movie} />
                ))}
                </div>
        </div>
        </div>


        </>
    )
}

export default Movies;