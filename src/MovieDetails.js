function MovieDetails({movie}) {
    const movieUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path

    return (
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <img src={movieUrl} alt={movie.title}/>
            <div>
                {movie.overview}
            </div>
        </div>
    )
}

export default MovieDetails