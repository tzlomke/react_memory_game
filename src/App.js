import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		cards
	};

	guessClick = id => {
		let cards = this.state.cards;

		// Randomize Cards Array
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[cards[i], cards[j]] = [cards[j], cards[i]]
		}
		
		// Set State to New Array
		this.setState({ cards });
	};

	render() {
		return ( 
			<Wrapper>
				<Title>Memory Game </Title>
				{this.state.cards.map(card => ( 
					<GameCard
						guessClick={this.guessClick}
						id={card.id}
						image={card.image}
						name={card.name}
					/>
				))}
			</Wrapper>
		);
	};
}

export default App;