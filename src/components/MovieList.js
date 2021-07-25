import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import AddMovie from './AddMovie';

const MovieList = () => {

    const [ movies, setMovies ] = useState([])

    useEffect(() => {
        axios.get('/api/movies')
            .then(res => {
                setMovies(res.data)
            }).catch(err => console.log(err))
    }, [movies])  

    let deleteMovie = (id) => {
        axios.delete(`/api/movies/${id}`)
            .then((res) => {
                setMovies(res.data)
            })
            .catch(err => console.log(err))
    }



    return (
        <section className="movieList">
            {movies.map((movie) => {
                // console.log(movie)
                return (
                    <Movie className='card'
                        key={movie.movie_id}
                        props={movie}
                        delete={deleteMovie}
                    />
                )
            })}
            <AddMovie />
        </section>
    )
}

export default MovieList
