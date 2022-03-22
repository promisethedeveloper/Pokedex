import React from "react";
import "./Pokecard.css";

const Pokecard = ({ name, image, type, base_experience }) => {
	return (
		<div className="Pokecard">
			<div className="Pokecard-name">{name}</div>
			<img className="Pokecard-image" src={image} alt="" />
			<div className="Pokecard-data">Type: {type}</div>
			<div className="Pokecard-data">EXP: {base_experience}</div>
		</div>
	);
};

export default Pokecard;
