import React from 'react';
import './Card.css';

const CardHeader = ({image}) => {
    const style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <img src={image} className="card-header" />
    
    );
}

const Button = () => {
 
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  
}

const CardBody = ({ text}) => {
  
    return (
      <div className="card-body">
        <p className="date">March 20 2015</p>
        
        
        
        <p className="body-content">{text}</p>
        
        <Button />
      </div>
    )
  
}

const Card = ({image, text}) => {
    return (
      <article className="card">
        <CardHeader image={image}/>
        <CardBody text={text}/>
      </article>
    );
}

export default Card;