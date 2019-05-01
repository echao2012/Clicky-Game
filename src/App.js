import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import images from "./images.json";

class App extends Component {
  state = {
    images,
    status: "Click an image to begin!",
    score: 0,
    topScore: 0,
    clickedIds: []
  };

  // Shuffle the images when loaded
  componentDidMount() {
    this.shuffleImages();
  }

  imageClick = id => {
    const clickedIds = this.state.clickedIds;

    // Check if image has already been clicked
    if (!clickedIds.includes(id)) {
      // Guess was correct
      clickedIds.push(id);
      const score = this.state.score + 1;

      this.setState({
        status: "You guessed correctly!",
        score,
        topScore: score > this.state.topScore ? score : this.state.topScore,
        clickedIds
      });
    } else {
      // Guess was incorrect
      this.setState({
        status: "You guessed incorrectly!",
        score: 0,
        clickedIds: []
      });
    }

    // Shuffle the images after each guess
    this.shuffleImages();
  }

  shuffleImages = () => {
    const images = this.state.images;

    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]]
    }

    this.setState({ images });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          status={this.state.status}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.images.map(item => (
            <ImgCard
              key={item.id}
              id={item.id}
              image={item.image}
              imageClick={this.imageClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
