


export default function MovieCard({movie}) {
    return (
        <article className="movie-card">

         

            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} />
              

          

        </article>
    )
}