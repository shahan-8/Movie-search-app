import { useState } from "react"
import MovieList from "./components/MovieList"
import SearchMovies from "./components/SearchMovies"
import { searchMovies } from "./api"

function App() {

    const [movies, setMovies] = useState([])
    const [message, setMessage] = useState("")

    const handleSearch = async (query) => {
         

        const data = await searchMovies(query)

        console.log(data.Search)

        if (data.Search) {
            setMovies(data.Search)
        }else {
        
        setMessage("No movies found 😕")
    }
    }

    return (
        <>
            <SearchMovies onSearch={handleSearch} 
                           errorMsg ={message}/>

        

            <MovieList movies={movies} />
        </>
    )
}

export default App