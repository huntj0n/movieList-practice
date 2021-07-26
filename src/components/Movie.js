import React, {useState} from 'react';
// import axios from 'axios';

const Movie = ({movie, delete: deleteFn}) => {


    // const [ edit, setEdit ] = useState(false)

    // console.log(movie)

    // let toggleEdit = () => {
    //     setEdit({
    //         edit: !edit
    //     })
    // }

    

    return (
        <form className="card movie">
            {/* why does this only work with props.props.whatever? */}
            {/* <p>{props.props.title}</p>
            <p>{props.props.director}</p>
            <p>{props.props.image}</p>
            <p>{props.props.rating}</p> */}

            {/* <button>Edit</button> */}
            {/* <button onClick={() => props.props.delete(props.props.movie_id)}>Delete</button> */}

            <p>{movie.title}</p>
            <p>{movie.director}</p>
            <p>{movie.image}</p>
            <p>{movie.rating}</p>

            <button>Edit</button>
            <button onClick={() => deleteFn(movie.movie_id)}>Delete</button>
        </form>
    )
}

export default Movie
