import React, {useState,useEffect}from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
function CardMovies({search}) {
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

        movie.filter((elmt)=>{
          if (search===""){
            return elmt
          }
          else if (elmt.title.toLowerCase().includes(search.toLowerCase())){
            return elmt
          }
        }).map(el=>
        <div>
          <Row>
             <Col md={4}>
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={el.posterUrl}/>
                  <Card.ImgOverlay>
                    <Card.Title className="text-danger">{el.title}</Card.Title>
                    <Card.Text className="text-danger">
                      {el.year}
                    </Card.Text>
                    <Card.Text className="text-white">
                      {el.plot}
                    </Card.Text>
                  </Card.ImgOverlay>
                  <Card.Body>
                    <Button variant="primary">Watch Now</Button>
                  </Card.Body>
                </Card>
             </Col>
          </Row>
       </div> 
        )
    
     )
  
   }
export default CardMovies

