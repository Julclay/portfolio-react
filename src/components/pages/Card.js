import React from 'react';

function Card(props) {

    return(
        <div className="card" style={{width: "18rem"}}>
<img className="card-img-top" src={props.img} alt="Card image cap"/>
<div className="card-body">
  <h5 className="card-title">{props.name}</h5>
  <p className="card-text">{props.descri}</p>
  <a href={props.linkDeploy} className="card-link">The Project</a>
    <a href={props.linkRepo} className="card-link">The code</a>
</div>
</div>
    )
}

export default Card;
