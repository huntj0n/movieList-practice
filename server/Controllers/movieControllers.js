module.exports = {
    getMovies: (req, res) => {
        const db = req.app.get('db');
        db.movies
            .get_movies().then((movies) => {
                res.status(200).send(movies);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err)
            })
    },
    addMovie: (req, res) => {
        const db = req.app.get('db');
        const { title, director, image, rating } = req.body;
        db.movies
            .add_movie(title, director, image, rating)
            .then((movies) => {
                res.status(200).send(movies);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err)
            })
    },
    // editMovie: (req, res) => {
    //     const db = req.app.get('db');
    //     const { id } = req.params;
    //     const { title, director, image, rating } = req.body;
    //     db.movies.edit_movie(id, title, director, image, rating)
    //         .then((movies) => res.status(200).send(movies))
    //         .catch((err) => {
    //             console.log(err);
    //             res.status(500).send(err)
    //         })
    // },
    // deleteMovie: (req, res) => {
    //     const db = req.app.get('db')
    //     const { id } = req.params;
        
    //     db.movies.delete_movie(id)
    //         .then((movies) => res.status(200).send(movies))
    //         .catch((err) => {
    //             console.log(err);
    //             res.status(500).send(err)
    //         })
    // },
    editMovie: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {title, director, image, rating} = req.body;

        db.movies.edit_movie(id, title, director, image, rating).then((movies) => res.status(200).send(movies))
        .catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    deleteMovie: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        
        db.movies.delete_movie(id).then((movies) => res.status(200).send(movies)).catch((err) => {
            console.log(err)
            res.status(500).send(err)
        });
    }
}