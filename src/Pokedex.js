import React from "react";
import Pokecard from "./Pokecard";
import Pokemons from "./Pokemons";
import "./Pokedex.css";

const Pokedex = () => {
	return (
		<div className="Pokedex">
			<h2 className="Pokedex-title">Pokedex</h2>
			<div className="Pokedex-cards">
				{Pokemons.map((p) => (
					<Pokecard
						key={p.id}
						name={p.name}
						type={p.type}
						image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
						base_experience={p.base_experience}
					/>
				))}
			</div>
		</div>
	);
};

export default Pokedex;
