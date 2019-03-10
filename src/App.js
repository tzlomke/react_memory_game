import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard";
import Modal from "./components/Modal";
import cards from "./cards.json";
import './App.css';

class App extends Component {
	state = {
		cards,
		score: 0,
		guessed: [],
		win: false,
		show: false,
		imgSrc: "http://oohlo.com/wp-content/uploads/2018/05/vlcsnap-2018-05-24-20h16m08s593-1024x574.png",
		imgAlt: "Loss Image",
		modalContent: <strong>"Oh no! You've attempted to fly through the ring too fast. Now you're goo."</strong>
	};

	// Game Logic
	guessClick = event => {

		// Card Array
		const cards = this.state.cards;

		// Selected Card ID
		let id = parseInt(event.target.id);
		
		// Score
		let score = this.state.score;

		// Guessed Array
		let guessed = this.state.guessed;

		// Win Condition
		let win = this.state.win;

		// Modal Contents
		let imgSrc = this.state.imgSrc;
		let imgAlt = this.state.imgAlt;
		let modalContent = this.state.modalContent;
		
		// Modal State
		let show = this.state.show;

		// Checks to See if Card has Already Been Selected
		if (guessed.includes(id)) {
			// Clear Array
			guessed = [];
			
			// Reset Score
			score = 0;

			// Bummer!
			console.log("bummer!");

			// Show Modal
			show = true;
		} else {
			// Push Selected Card ID Into Guessed Array
			guessed.push(id);

			// Increment Score
			score++;
		}

		// Win Condition
		if (score === 12) {
			// Reset Score
			score = 0;

			// Congrats!
			console.log("congratulations!");

			// Win Condition Set to True
			win = true;

			// Changes Modal Contents
			imgSrc = "https://vignette.wikia.nocookie.net/expanse/images/b/b1/Ringnetwork1.png/revision/latest/scale-to-width-down/1000?cb=20180615211721";
			imgAlt = "Win Image";
			modalContent =<strong>Congrats! You've opened the ring network!</strong>;

			// Show Modal
			show = true;
		}

		// Randomize Cards Array
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[cards[i], cards[j]] = [cards[j], cards[i]]
		}
		
		// Set New States
		this.setState({ cards , score, guessed, win, show, imgSrc, imgAlt, modalContent });

	};

	// Closes Modal
	closeModalHandler = () => {
		this.setState({
			show: false
		});
	};

	render() {
		return ( 
			<Wrapper>

				<ScoreBoard
					score={this.state.score}
				/>

				{this.state.cards.map(card => ( 
					<GameCard
						guessClick={this.guessClick}
						id={card.id}
						key={card.id}
						image={card.image}
						name={card.name}
					/>
				))}
				
				<Modal 
					show={this.state.show}
					close={this.closeModalHandler}
					imgSrc={this.state.imgSrc}
					imgAlt={this.state.imgAlt}
					modalContent={this.state.modalContent}
				>
				</Modal>

			</Wrapper>
		);
	};
}

export default App;