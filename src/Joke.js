import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  getReaction() {
    if (this.props.votes >= 15)
      return { color: "#4CAF50", emo: "em em-rolling_on_the_floor_laughing" };
    else if (this.props.votes >= 12)
      return { color: "#8BC34A", emo: "em em-laughing" };
    else if (this.props.votes >= 9)
      return { color: "#CDDC39", emo: "em em-smiley" };
    else if (this.props.votes >= 6)
      return { color: "#FFEB3B", emo: "em em-slightly_smiling_face" };
    else if (this.props.votes >= 3)
      return { color: "#FFC107", emo: "em em-neutral_face" };
    else if (this.props.votes >= 0)
      return { color: "#FF9800", emo: "em em-confused" };
    else return { color: "#f44336", emo: "em em-angry" };
  }

  render() {
    const obj = this.getReaction();
    return (
      <div className="Joke ">
        {/* <li>{this.props.text}</li> */}
        <div className="Joke-buttons">
          <svg
            onClick={this.props.upvote}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 8v5H8v-5H5l5-5 5 5h-3z" />
          </svg>
          <span className="Joke-votes" style={{ color: obj.color }}>
            {this.props.votes}
          </span>
          <svg
            onClick={this.props.downvote}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-8V5h4v5h3l-5 5-5-5h3z" />
          </svg>
        </div>

        <div className="Joke-text">{this.props.text}</div>

        <div className="Joke-emo">
          <i
            class={obj.emo}
            // aria-label="ROLLING ON THE FLOOR LAUGHING"
          ></i>
        </div>
      </div>
    );
  }
}

export default Joke;
