import React from 'react'
import './Card.css'
import propTypes from 'prop-types';
const Card = ({title , price}) => {
  return (
    <div className='card'  style= {{backgroundColor: "orange" , color: "white",
    height:"250px"
    , width: "200px"
    }}>
      <h1 style={{ backgroundColor : "gray",color: "black" , height:"150px"
      , width: "150px"
    }}>{title}</h1>
      <p className="price">{price}</p>
      <p><button>click to Add</button></p>
    </div>
  )
}

//Defining proptypes
Card.propTypes = {
    title: propTypes.string.isRequired,
    price: propTypes.number
}

//Making use of Default PropTypes

Card.defaultProps = {
  title : 'Dummy-Product',
}

export default Card;