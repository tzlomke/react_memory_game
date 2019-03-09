import React from "react";
import "./style.css";

function GameCard(props) {
	return (
		<div className="card">
			<div onClick={() => props.selectCard(props.id)} className="img-container">
				<img alt={props.name} src={props.image} />
			</div>
		</div>
	);
}

export default GameCard;