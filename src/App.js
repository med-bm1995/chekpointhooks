import './App.css';
import { useState } from 'react';

import MovieCard from '../src/components/MovieCard'
import MovieList from '../src/components/MovieList'
import Filter from '../src/components/Filter'
import FormComponent from '../src/components/rate'

function App() {
  const [movies, setMovies] = useState([
    {
      image: './1.jpg',
      title: 'Parasite',
      description: 'Bong Joon Ho has been concocting',
      rate: '5'
    }, {
      image: './2.jpg',
      title: 'Portrait Of A Lady On Fire',
      description: 'Bong Joon On an isolated island in 18th Century Brittany',
      rate: '3'
    }, {
      image: './3.jpg',
      title: 'Uncut Gems',
      description: 'Bong Joon The Safdie Brothers took their ',
      rate: '4'
    }
  ])
  const [searchByTitle, setSearchByTitle] = useState('')
  const [searchbyrate, setSearchByRate] = useState(0)

  const addmovie = (newmovie) => {
    setMovies([...movies, newmovie])
  }
  const [isVisible, setisVisible] = useState(false)
  const togglevisibility = () => {
    setisVisible(!isVisible)
    console.log(isVisible)
  }

  return (
    <div className="App">
      <Filter setSearchByTitle={setSearchByTitle} setSearchByRate={setSearchByRate} />
      <MovieList movies={movies} searchByTitle={searchByTitle} searchbyrate={searchbyrate} />
      <button onClick={togglevisibility}>
        {isVisible ? "hide add form" : "show add form"}
      </button> {isVisible && <MovieCard addmovie={addmovie} />
      }



    </div>
  );
}

export default App;
