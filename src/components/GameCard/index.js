import React from "react";
import "./style.css";

function GameCard(props) {
	return (
		<div className="card">
			<div onClick={() => props.guessClick(props.key)} className="img-container">
				<img alt={props.name} src={props.image} />
			</div>
		</div>
	);
}

export default GameCard;