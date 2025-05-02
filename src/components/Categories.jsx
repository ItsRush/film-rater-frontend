import { Link } from "react-router-dom";


const Categories = ({ movie }) => {
    if(!movie){
        return null;
    }
    const { id , poster_path } = movie;
    const image = `https://image.tmdb.org/t/p/w500/${poster_path}` 



    return (
        <div className="flex items-center justify-center">
            {/* Popular Category */}
            <div className="text-white">
                <Link to={`/movie/${id}`}>
                    <img src={image}  className="mt-3 w-90 rounded-xl" />
                </Link>
            </div>
        </div>
    );
};

export default Categories;