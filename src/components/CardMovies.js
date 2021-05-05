import React, {useState,useEffect}from 'react'
import {Card, Button} from 'react-bootstrap'
function CardMovies() {
    const [movie, setMovie] = useState([])
    const getMovie = ()=>{
      fetch('movies.json').then(
            response => response.json()).then 
                     (films => setMovie(films));
    }
    
    useEffect(()=> {getMovie()
    },[])
  
    console.log(movie) 
  
    return(
        movie.map(el=>
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={el.posterUrl}/>
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
              Some quick ex
            </Card.Text>
            <Button variant="primary">Add to favorite</Button>
          </Card.Body>
        </Card>
       </div> 
        )
    
     )
  
   }
export default CardMovies

