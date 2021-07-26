import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import AddMovie from './AddMovie';

const MovieList = () => {

    const [ movies, setMovies ] = useState([])

    useEffect(() => {
        getMovies()
    }, []) 
    
    let getMovies = () => {
        axios.get('/api/movies')
            .then(res => {
                setMovies(...movies, res.data)
                // console.log(res.data)
            }).catch(err => console.log(err))
    }

    let deleteMovie = (id) => {
        axios.delete(`/api/movies/${id}`)
            .then((res) => {
                setMovies(res.data)
            })
            .catch(err => console.log(err))
    }

    let editMovie = (id, title, director, image, rating) => {
        axios.put(`/api/movies/${id}`, {title, director, image, rating})
            .then((res) => {
                setMovies(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }


    return (
        <section className="movieList">
            {movies.map((movie) => {
                return (
                    <Movie className='card'
                        key={movie.movie_id}
                        movie={movie}
                        deleteMovie={deleteMovie}
                        editMovie={editMovie}
                    />
                )
            })}
            <AddMovie 
                resetMovies = {setMovies}
            />
        </section>
    )
}

export default MovieList
