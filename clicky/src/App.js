import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./Components/CharacterCard/CharacterCard";
import Wrapper from "./Components/Wrapper/Wrapper";
import characters from "./characters.json";
import Title from "./Components/Title/Title";
import Instructions from "./Components/Instructions/Instructions";
import Score from "./Components/Score/Score";

class App extends Component {
  state = {
    characters: characters,
    chosenCharacters: [],
    score: 0,
    highestScore: 0
  };

  checkCard = e => {
    console.log(e.target.name);
    if (this.state.chosenCharacters.indexOf(e.target.name) === -1) {
      this.setState({
        chosenCharacters: [...this.state.chosenCharacters, e.target.name]
      });
      this.setState(prevState => {
        return { score: prevState.score + 1 };
      });
      this.rotateCharacters();
    } else {
      alert("You've already clicked that character, resetting game");
      this.rotateCharacters();
      this.setState({
        characters: characters,
        chosenCharacters: [],
        score: 0
      });
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  //rotates images when images are clicked
  rotateCharacters = () => {
    var a = this.state.characters;
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    this.setState({
      characters: a
    });
  };

  //renders images with onClick method
  render() {
    return (
      <Wrapper>
        <div className="App">
          <Title>Clicky Game</Title>
          <Instructions>
            Click on an image to begin, try not to click the same image twice!
          </Instructions>
          <Score>
            {" "}
            Score: {this.state.score} || Highest Score:{" "}
            {this.state.highestScore}{" "}
          </Score>
          {this.state.characters.map((character, i) => (
            <CharacterCard
              key={i}
              name={character.name}
              image={character.image}
              checkCard={this.checkCard}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
