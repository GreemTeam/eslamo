import React from "react";
import Verse from "../verses/verse";
import "./favorites.css";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      translatedVerses: [
        "In their hearts is disease, so Allah has increased their disease; and for them is a painful punishment because they [habitually] used to lie.,But they wonder that there has come to them a warner from among themselves, and the disbelievers say, 'This is an amazing thing.  ",
      ],
    };
  }
  async componentDidMount() {
    const url = "http://localhost:5000/favorites";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ favorites: data });
    console.log(data);
  }

  playAudio(i) {
    const audio = document.getElementsByClassName("verse-audio");
    //return audio;
    audio[i].play();
  }
  addToFavoris(e) {}
  render() {
    var favories = this.state.favorites.map((verse, i) => (
      <div>
        <Verse
          verse={verse.verse_text}
          key={i}
          surah_number={verse.surah_number}
          verse_number={verse.verse_number}
          translatedVerses={this.state.translatedVerses[0]}
          playAudio={() => {
            this.playAudio(i);
          }}
          verse_id={verse.verse_id}
          addToFavoris={this.addToFavoris}
          disabled={true}></Verse>
      </div>
    ));

    return <div>{favories}</div>;
  }
}
export default Favorites;
