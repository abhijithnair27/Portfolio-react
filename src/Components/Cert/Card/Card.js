import React from 'react';
import './Card.css';

const CardHeader = ({image}) => {
    const style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
      </header>
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

const Card = () => {
    return (
      <article className="card">
        <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
        <CardBody text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
      </article>
    );
}

export default Card;