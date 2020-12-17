import React, { useState } from 'react'

function MovieCard({ addmovie }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('./logo192.png')

    const [rate, setRate] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault()
        let newmovie = {
            image: image,
            title: title,
            description: description,
            rate: rate,
        }
        addmovie(newmovie)
    }

    return (
        <div className="movie">
            <div className="container">
                <form action="action_page.php">
                    <input type="image" src="./logo192.png" alt="Submit" width={48} height={48}

                    />
                    <br></br>

                    <label htmlFor="fname">title</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="lname">description</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label htmlFor="subject">rate</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."
                        onChange={(e) => setRate(e.target.value)}
                    />
                    <button onClick={handleSubmit}>save</button>
                </form>
            </div>

        </div>
    )
}

export default MovieCard
