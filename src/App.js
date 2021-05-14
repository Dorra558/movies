import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Movies from './components/Movies'
import About from './components/About'
import Favorit from './components/favorit'
import React, {useState,useEffect} from 'react'


function App() {
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    fetch('movies.json').then(
          response => response.json()).then 
                   (films => setMovie(films));
  }
  
  useEffect(()=> {getMovie()
  },[])

  const [favorites, setFavorites] = useState(0)
  const getFavorites =() =>{
    setFavorites(favorites+1)
    console.log(favorites)
  }

  const [favoriteMovie, setFavoriteMovie] = useState([])
  const addFavorite = (e) => {
   favoriteMovie.push(e)
    console.log(favoriteMovie)
  }

  return (
    <div className="App">

    <BrowserRouter>
      
        <Route exact path="/"> <Home movie={movie} getMovie={getMovie} favorites={favorites} getFavorites={getFavorites} addFavorite={addFavorite} /></Route>
        <Route path="/about" component={About} />
        <Route path="/movies" component={Movies} />
        <Route path="/favorit" ><Favorit movie={movie} getMovie={getMovie} favorites={favorites}/></Route>
       
    </BrowserRouter>

    </div>
  );
}

export default App;
