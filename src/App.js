import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    score: 0,
    clickedIds: []
  };

  componentDidMount() {
    this.shuffleImages();
  }

  imageClick = id => {
    const clickedIds = this.state.clickedIds;

    if (!clickedIds.includes(id)) {
      // Guess was correct
      clickedIds.push(id)
      this.setState({
        clickedIds,
        score: this.state.score + 1
      });
    } else {
      // Guess was incorrect
      this.setState({
        clickedIds: [],
        score: 0
      });
    }

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
      <Wrapper>
        <Navbar>Memory Game</Navbar>
        {this.state.images.map(item => (
          <ImgCard
            key={item.id}
            id={item.id}
            image={item.image}
            imageClick={this.imageClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
