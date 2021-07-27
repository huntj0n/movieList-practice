import React, {useState} from 'react';
// import axios from 'axios';

const Movie = ({movie, deleteMovie, editMovie}) => {


    const [ edit, setEdit ] = useState(false)
    const [ title, setTitle ] = useState(movie.title)
    const [ director, setDirector ] = useState(movie.director)
    const [ image, setImage ] = useState(movie.image)
    const [ rating, setRating ] = useState(movie.rating)


    let toggleEdit = () => {
        setEdit(!edit)
        // console.log(edit)
    }

    let titleChange = (value) => {
        setTitle(value)
    }
    let directorChange = (value) => {
        setDirector(value)
    }
    let imageChange = (value) => {
        setImage(value)
    }
    let ratingChange = (value) => {
        setRating(value)
    }

    let save = () => {
        console.log(movie.movie_id, title, director, image, rating)
        editMovie(movie.movie_id, {title, director, image, rating});
        toggleEdit()
    }
    

    return (
        <form className="card movie">
            { edit ? (
                <div>
                    <input type="text" value={title}  onChange={(e)=> titleChange(e.target.value)}/>
                    <input type="text" value={director}  onChange={(e)=> directorChange(e.target.value)}/>
                    <input type="text" value={image}  onChange={(e)=> imageChange(e.target.value)}/>
                    <input type="text" value={rating}  onChange={(e)=> ratingChange(e.target.value)}/>

                    <button onClick={() => toggleEdit()}>Cancel</button>
                    <button onClick={() => save()}>Save</button>
                </div>
            ) : (
                <div>
                    <p>{title}</p>
                    <p>{director}</p>
                    <p>{image}</p>
                    <p>{rating}</p>

                    <button onClick={() => toggleEdit()}>Edit</button>
                    <button onClick={() => deleteMovie(movie.movie_id)}>Delete</button>
                </div>
            ) }

            {/* <p>{movie.title}</p>
            <p>{movie.director}</p>
            <p>{movie.image}</p>
            <p>{movie.rating}</p>

            <button>Edit</button>
            <button onClick={() => deleteMovie(movie.movie_id)}>Delete</button> */}
        </form>
    )
}

export default Movie
