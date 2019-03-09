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

	clickFriend = id => {

	};

	render() {
		return ( 
			<Wrapper>
				<Title>Memory Game </Title> 
				{this.state.cards.map(card => ( 
					<GameCard 
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