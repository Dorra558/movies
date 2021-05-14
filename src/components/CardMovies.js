import React, {useState,useEffect}from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
function CardMovies({search, movie,getFavorites,addFavorite}) {
    // const [movie, setMovie] = useState([])
    // const getMovie = ()=>{
    //   fetch('movies.json').then(
    //         response => response.json()).then 
    //                  (films => setMovie(films));
    // }
    
    // useEffect(()=> {getMovie()
    // },[])
  
    // console.log(movie) 
  
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
              <Card className="CardMov my-3" style={{ width: '16rem'}}>
                  <Card.Img variant="top" className="w-100 imagCard" src={el.posterUrl}/>
                  {/* <Card.ImgOverlay className="overlayImg">
                    <Card.Title className="text-danger">{el.title}</Card.Title>
                    <Card.Text className="text-danger">
                      {el.year}
                    </Card.Text>
                    <Card.Text className="text-white">
                      {el.plot}
                    </Card.Text>
                  </Card.ImgOverlay> */}
                  <Card.Body>
                    <div className="d-flex justify-content-between pb-2">
                      <Rater total={5} rating={el.rating} />
                     <div onClick={()=>{getFavorites();addFavorite(el)}}><i class="far fa-heart"></i></div>
                    </div>
                    <Button variant="primary" className="btnWatch">Watch Now <i className="ml-2 fas fa-play-circle"></i></Button>
                  </Card.Body>
                </Card>
             </Col>
          </Row>
       </div> 
        )
    
     )
  
   }
export default CardMovies

