import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import { ReactComponent as CatLaugh } from "./laugh_emoji.svg";
import "./JokesList.css";
import { v4 as uuid } from "uuid";

class JokesList extends Component {
  static defaultProps = {
    numOfJokes: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loadSpinner: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //if no jokes in localStorage
    if (this.state.jokes.length === 0) this.getJokes();
  }

  //Function to Loads new jokes
  async getJokes() {
    var jokeArr = [];
    while (jokeArr.length < this.props.numOfJokes) {
      var jokesAPI = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      var jokes = jokesAPI.data.joke;
      jokeArr.push({ joke: jokes, votes: 0, id: uuid() });
    }
    // debugger;

    this.setState(
      (st) => ({
        /*alternate way to combine two array of objects
                 // jokes: [].concat(st.jokes, jokeArr)*/
        loadSpinner: false,
        jokes: [...st.jokes, ...jokeArr],
      }),
      () => {
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
      }
    );
  }

  handleVote(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + delta } : j
        ),
      }),
      () => {
        //update votes to localStorage
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
      }
    );
  }

  handleClick() {
    this.setState({ loadSpinner: true });
    //calling async function that requests for more new jokes
    this.getJokes();
  }

  render() {
    //variable that prints Spinner
    let printSpinner = (
      <div>
        <h1 className="JokesList-title">Loading...</h1>
        <svg
          className="loadingIcon"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          width="277px"
          height="277px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          data-darkreader-inline-bgimage=""
          data-darkreader-inline-bgcolor=""
        >
          <circle
            cx="33"
            cy="50"
            fill="#e90c59"
            r="22"
            data-darkreader-inline-fill=""
            className="circle1"
          >
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.5;1"
              values="33;67;33"
              begin="-0.5s"
            ></animate>
          </circle>
          <circle
            cx="67"
            cy="50"
            fill="#46dff0"
            r="22"
            data-darkreader-inline-fill=""
            className="circle2"
          >
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.5;1"
              values="33;67;33"
              begin="0s"
            ></animate>
          </circle>
          <circle
            cx="33"
            cy="50"
            fill="#e90c59"
            r="22"
            data-darkreader-inline-fill=""
            className="circle3"
          >
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.5;1"
              values="33;67;33"
              begin="-0.5s"
            ></animate>
            <animate
              attributeName="fill-opacity"
              values="0;0;1;1"
              calcMode="discrete"
              keyTimes="0;0.499;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            ></animate>
          </circle>
        </svg>
      </div>
    );

    //variable printing Data
    let printJokes = (
      <div className="JokesList">
        <div className="JokesList-sidebar">
          <h1 className="JokesList-title">Jokes</h1>
          <CatLaugh className="cat-laugh-emo" />
          {/* <img src="laugh_emoji.svg" alt="Laugh Emo" /> */}
          <button className="JokesList-new-jokes" onClick={this.handleClick}>
            New Jokes ?
          </button>
        </div>
        <div className="JokesList-jokes">
          {this.state.jokes.map((j) => (
            <Joke
              text={j.joke}
              votes={j.votes}
              key={j.id}
              id={j.id}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );

    return this.state.loadSpinner ? printSpinner : printJokes;
  }
}

export default JokesList;
