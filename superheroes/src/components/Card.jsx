import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h2 className="card-title">{props.hero.name}</h2>
      <p>{props.index + 1}</p>
      <p className="universe">Вселенная: {props.hero.universe}</p>
      <p className="alterego">Альтер эго: {props.hero.alterego}</p>
      <p className="occupation">Род деятельности: {props.hero.occupation}</p>
      <p className="friends">Друзья: {props.hero.friends}</p>
      <p className="superpowers">Суперсила: {props.hero.superpowers}</p>
      <img src={props.hero.url} alt={props.hero.name} />
      <p className="info">{props.hero.info}</p>
    </div>
  );
}

export default Card;
