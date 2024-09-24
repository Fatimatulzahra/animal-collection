import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <h3>Title: {props.title}</h3>
            <h5>Description: {props.description}</h5>
            <h6>Difficulty: {props.difficulty}</h6>
            <a href={props.solve} target="_blank" rel="noopener noreferrer"><button>Practice</button></a>
        </div>
    )
}

export default Card;