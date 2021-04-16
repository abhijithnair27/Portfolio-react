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

const Button = ({src}) => {
 
    return (
      <a href={src} style={{textDecoration: "none"}}>
        <button href={src} className="button button-primary">
          <i className="fa fa-chevron-right"></i> Learn more
        </button>
      </a>
    );
  
}

const CardBody = ({src , text}) => {
  
    return (
      <div className="card-body">
        
        
        
        <p className="body-content">{text}</p>
        
        <Button src={src} />
      </div>
    )
  
}

const Card = ({image, src,  text}) => {
    return (
      <article className="card">
        <CardHeader image={image}/>
        <CardBody src={src} text={text}/>
      </article>
    );
}

export default Card;