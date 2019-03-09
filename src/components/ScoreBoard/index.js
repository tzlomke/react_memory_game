import React from "react";

function ScoreBoard(props) {
	return (
		<div className="score-board">
			<h2 className="score">Your Score: {props.score} | Max Score: 12</h2>
		</div>
	);
}

export default ScoreBoard;