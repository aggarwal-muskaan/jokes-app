import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  render() {
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
          <span className="Joke-votes">{this.props.votes}</span>
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
            class="em em-rolling_on_the_floor_laughing"
            aria-label="ROLLING ON THE FLOOR LAUGHING"
          ></i>
        </div>
      </div>
    );
  }
}

export default Joke;
