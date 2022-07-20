import React from 'react'

const IMAGE_API = "https://image.tmdb.org/t/p/w1280"

function Movies({ movie }) {

    return (
        <div className='container'>
            <img 
                src={IMAGE_API + movie.poster_path} 
                alt={movie.title}
            />

            <div className='bottom'>
                <div className='title-container'>
                    <h2 className='title'>{movie.title}</h2>
                    <h3 className='vote'>{movie.vote_average}</h3>
                </div>
                <div>
                    <h3 className='date'>{movie.release_date}</h3>
                </div>
            </div>

            <div className="info">
                {movie.overview}
            </div>

        </div>

    )
}

export default Movies