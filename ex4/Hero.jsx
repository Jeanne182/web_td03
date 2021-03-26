import React from 'react';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/prefer-default-export
export const Hero = (props) => (
  <div>
    <h2>{props.name}</h2>
    <h5>{props.occupation !== '-' ? props.occupation : ''}</h5>
    <div className="hero-container">
      <img src={props.image} alt={props.name} />
      <div className="caracteristics">
        <h5>{`Intelligence : ${props.powerstats.intelligence}`}</h5>
        <h5>{`Strength : ${props.powerstats.strength}`}</h5>
        <h5>{`Speed : ${props.powerstats.speed}`}</h5>
        <h5>{`Durability : ${props.powerstats.durability}`}</h5>
        <h5>{`Power : ${props.powerstats.power}`}</h5>
        <h5>{`Combat : ${props.powerstats.combat}`}</h5>
      </div>
    </div>
  </div>
);
