import React from "react";
import "./style.css";

function GameCard(props) {
	return (
		<div className="card">
			<div onClick={(event) => props.guessClick(event, props.id)} className="img-container">
				<img alt={props.name} src={props.image} id={props.id}/>
			</div>
		</div>
	);
}

export default GameCard;