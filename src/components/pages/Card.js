import React from 'react';

function Card(props) {

    return(
        <div className="card mb-5 mx-auto" style={{width: "25rem"}}>
<img className="card-img-top" src={props.img} alt="Card image cap"/>
<div className="card-body">
  <h5 className="card-title">{props.name}</h5>
  <p className="card-text">{props.description}</p>
  <a href={props.linkLive} className="card-link float-left">The Project</a>
    <a href={props.linkRepo} className="card-link">The code</a>
</div>
</div>
    )
}

export default Card;
