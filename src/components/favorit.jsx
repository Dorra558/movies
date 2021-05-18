import React from 'react'
import Navigation from './Navigation'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import Rater from 'react-rater'


const Favorit = ({favorites, favoriteMovie}) =>  {
    return (
        <div>
          <Navigation favorites={favorites} /> 
          {favoriteMovie.map(el =>
          <Container className="d-flex flex-wrap justify-content-around">

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
                   
                   </div>
                   <Button variant="primary" className="btnWatch">Watch Now <i className="ml-2 fas fa-play-circle"></i></Button>
                 </Card.Body>
               </Card>

        </Container> 
            )} 
        </div>
    )
}

export default Favorit
