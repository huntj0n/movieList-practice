import React, {useState} from 'react';
import axios from 'axios';

const Movie = (props) => {

    const [ edit, setEdit ] = useState(false)


    let toggleEdit = () => {
        setEdit({
            edit: !edit
        })
    }

    let deleteMovie = (id) => {
        axios.delete(`/api/movies/${id}`)
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <form className="card movie">
            <p>{props.props.title}</p>
            <p>{props.props.director}</p>
            <p>{props.props.image}</p>
            <p>{props.props.rating}</p>

            <button>Edit</button>
            <button onClick={() => deleteMovie(props.props.movie_id)}>Delete</button>
        </form>
    )
}

export default Movie
