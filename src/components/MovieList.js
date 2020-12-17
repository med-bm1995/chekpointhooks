import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function MovieList({ movies, searchByTitle, searchbyrate }) {
    return (
        <div className="movies">
            {movies
                .filter(movie => movie.title.toLowerCase().includes(searchByTitle.toLowerCase().trim()) && movie.rate >= searchbyrate)
                .map(movie =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={movie.image} />
                        <Card.Body>
                            <Card.Title> {movie.title}</Card.Title>
                            <Card.Text>
                                {movie.description}
                            </Card.Text>
                            <Card.Title> {movie.posterUrl}</Card.Title>
                            <Card.Title> {movie.rate}</Card.Title>

                        </Card.Body>
                    </Card>
                )

            }

        </div>
    )
}

export default MovieList
