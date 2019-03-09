import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard";
import cards from "./cards.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		cards,
		score: 0,
		guessed: []
	};

	guessClick = event => {
		// Card Array Variable
		const cards = this.state.cards;

		// Selected Card ID Variable
		let id = parseInt(event.target.id);
		
		// Score Variable
		let score = this.state.score;

		// Guessed Array Variable
		let guessed = this.state.guessed;

		if (guessed.includes(id)) {
			guessed = [];
			console.log("bummer!");
			score = 0;
		} else {
			// Push Selected Card ID Into Guessed Array
			guessed.push(id);
			// Increment Score
			score++;
		}

		if (score === 12) {
			console.log("congratulations!");
			score = 0;
		}

		console.log(guessed);

		// Randomize Cards Array
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[cards[i], cards[j]] = [cards[j], cards[i]]
		}
		
		// Set New States
		this.setState({ cards , score, guessed: guessed});
	};

	render() {
		return ( 
			<Wrapper>
				<ScoreBoard
					score={this.state.score}
				>
					Memory Game 
				</ScoreBoard>
				{this.state.cards.map(card => ( 
					<GameCard
						guessClick={this.guessClick}
						id={card.id}
						key={card.id}
						image={card.image}
						name={card.name}
						data-selected={card.selected}
					/>
				))}
			</Wrapper>
		);
	};
}

export default App;