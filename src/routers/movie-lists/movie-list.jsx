import { useLoaderData } from "react-router-dom";
import CardComponent from "../../Components/Card-Component/Card-Component"
import { getMovies } from "../../Components/api";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
    let movies = await getMovies();

    return { movies }
}


export default function MovieList (){
    const {movies} = useLoaderData()
   return(
    <div className='products-container'>
    {
     movies.map((movie) => {
       return(
         <CardComponent key={movie.id} movie={movie} />
       )
     })
    }
    </div>
    )
}