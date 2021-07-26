import React, {useState} from 'react';
// import axios from 'axios';

const Movie = ({movie, deleteMovie, editMovie}) => {


    const [ edit, setEdit ] = useState(false)



    let toggleEdit = () => {
        setEdit(!edit)
        console.log(edit)
    }

    

    return (
        <form className="card movie">
            { edit ? (
                <div>

                    <button onClick={() => toggleEdit()}>Cancel</button>
                    <button onClick={() => console.log('saved')}>Save</button>
                </div>
            ) : (
                <div>
                    <p>{movie.title}</p>
                    <p>{movie.director}</p>
                    <p>{movie.image}</p>
                    <p>{movie.rating}</p>

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
