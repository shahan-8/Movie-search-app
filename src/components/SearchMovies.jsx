import { useState } from "react"

const SearchMovies = ({ onSearch,errorMsg }) => {

     const [query, setQuery] = useState("")
     


    const handleSubmit =(event)=>{
         event.preventDefault()      
        onSearch(query)

    }

  return (
    
         <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="query" className="Label">
                Search for a movie
            </label>

            <input
                type="text"
                name="query"
                placeholder="Enter movie name..."
                value={query}
                onChange={(event)=>{setQuery(event.target.value)}} 
            />

            <button className="button" type="submit">
                Search
            </button>
            <p className="no-results">{errorMsg}</p>
        </form>
   
  )
}

export default SearchMovies
