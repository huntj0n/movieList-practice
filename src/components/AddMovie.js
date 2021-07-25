import React, {useState} from 'react';
import axios from 'axios'

const AddMovie = () => {

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState('')

    let titleChange = (value) => {
        setTitle(value)
        console.log(title)
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
    let resetStateValues = function(){
        setTitle('')
        setDirector('')
        setImage('')
        setRating('')
    }

    let addMovie = (title, director, image, rating) => {
        axios.post('/api/movies', {title, director, image, rating})
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => console.log(err));
        resetStateValues()
    }

    return (
        <form className='addMovie card'>
            <input value={title}
                onChange={(e)=> titleChange(e.target.value)}
                placeholder='Enter Movie Title' 
                type="text" />
            <input value={director}
                onChange={(e)=> directorChange(e.target.value)}
                placeholder='Enter Movie Director' 
                type="text" />
            <input value={image}
                onChange={(e)=> imageChange(e.target.value)}
                placeholder='Enter Movie Image' 
                type="text" />
            <input value={rating}
                onChange={(e)=> ratingChange(e.target.value)}
                placeholder='Enter Movie Rating' 
                type="text" />

            <button onClick={() => addMovie(title, director, image, rating)}>Submit</button>
        </form>
    )
}

export default AddMovie
