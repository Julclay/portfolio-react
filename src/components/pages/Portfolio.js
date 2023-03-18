import React from "react";
import Card from "./Card"
import project from "../../project.json"

function Portfolio() {
  console.log(project)
  return (
    <div>
      <h1 class="mt-3 mb-4 text-center">My projects</h1>
     {project.map(card => <Card {...card} key={card.id}/>)}
</div>
  );
}

export default Portfolio;
