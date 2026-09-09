const MovieList = ({ movies }) => {
    return (
        <section className="movie-list">
            {movies.map(movie => (
                <article className="movie-card" key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />

                    <h2>{movie.Title}</h2>

                    <p>{movie.Year}</p>
                </article>
            ))}
        </section>
    )
}

export default MovieList
