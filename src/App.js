import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
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
		
		// Score Variable
		let score = this.state.score;

		// Randomize Cards Array
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[cards[i], cards[j]] = [cards[j], cards[i]]
		}

		// Increment Score
		score++;
		
		// Set New States
		this.setState({ cards , score: score});
	};

	render() {
		return ( 
			<Wrapper>
				<Title 
					score={this.state.score}
				>
					Memory Game 
				</Title>
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