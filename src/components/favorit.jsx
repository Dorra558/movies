import React from 'react'
import Navigation from './Navigation'

const Favorit = ({favorites}) =>  {
    return (
        <div>
          <Navigation favorites={favorites} />  
        </div>
    )
}

export default Favorit
