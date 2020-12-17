import React from 'react'
import { Card } from 'react-bootstrap';

function Filter({ setSearchByTitle, setSearchByRate }) {

    return (
        <div>
            <div className="moviessearch">
                <p> searchByTitle:</p>
                <input type="test" onChange={(e) => setSearchByTitle(e.target.value)} />

                <p> setSearchByRate:</p>
                <input type="number" onChange={(e) => setSearchByRate(e.target.value)} />


            </div>
        </div>
    )
}

export default Filter
