import React from "react";
import "./style.css";

function ScoreBoard(props) {
	return (
		<div className="score-board">
			<h1 className="title">Memory Game</h1>
			<div className="score-board">
				<h2 className="score">Your Score: {props.score} | Max Score: 12</h2>
			</div>
		</div>
	);
}

export default ScoreBoard;