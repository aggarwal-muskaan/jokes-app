import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
// import "./laughing.svg";
import "./JokesList.css";
import { v4 as uuid } from "uuid";

class JokesList extends Component {
  static defaultProps = {
    numOfJokes: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  async componentDidMount() {
    var jokeArr = [];

    // for (var i = 0; i < this.props.numOfJokes; i++) {
    //   this.setState({ jokes: [...this.state.jokes, jokes] });
    // }

    while (jokeArr.length < this.props.numOfJokes) {
      var jokesAPI = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      var jokes = jokesAPI.data.joke;
      jokeArr.push({ joke: jokes, votes: 0, id: uuid() });
    }

    this.setState({ jokes: jokeArr });
    console.log(this.state.jokes);
  }

  handleVote(id, delta) {
    this.setState((st) => ({
      jokes: st.jokes.map((j) =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      ),
    }));
  }

  render() {
    // let printJokes = ;
    return (
      <div className="JokesList">
        <div className="JokesList-sidebar">
          <h1 className="JokesList-title">Jokes</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
          >
            <linearGradient
              id="a"
              x1="-2525.459"
              x2="-2492.214"
              y1="56.111"
              y2="104.135"
              gradientTransform="matrix(-1 0 0 1 -2088 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".737" stop-color="#ffc970" />
              <stop offset="1" stop-color="#ffb233" />
            </linearGradient>
            <path
              fill="url(#a)"
              d="M299,163h158l0,0c30.5-47.2,31.1-107.8,1.5-155.6L457,5h-1.5C392.1,5,336,46.1,316.9,106.6
			L299,163z"
            />
            <radialGradient
              id="b"
              cx="-2565.655"
              cy="86.667"
              r="73.34"
              gradientTransform="matrix(-1 0 0 1 -2088 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".8" stop-color="#ebeae0" />
              <stop offset="1" stop-color="#d7d5c1" />
            </radialGradient>
            <path
              fill="url(#b)"
              d="M299,163h158l0,0c30.5-47.2,31.1-107.8,1.5-155.6L457,5L299,163z"
            />
            <linearGradient
              id="c"
              x1="74.541"
              x2="107.786"
              y1="56.111"
              y2="104.135"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".737" stop-color="#ffc970" />
              <stop offset="1" stop-color="#ffb233" />
            </linearGradient>
            <path
              fill="url(#c)"
              d="M213,163H55l0,0C24.5,115.8,23.9,55.2,53.5,7.4L55,5h1.5C119.9,5,176,46.1,195.1,106.6
			L213,163z"
            />
            <radialGradient
              id="d"
              cx="34.346"
              cy="86.667"
              r="73.34"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".8" stop-color="#ebeae0" />
              <stop offset="1" stop-color="#d7d5c1" />
            </radialGradient>
            <path
              fill="url(#d)"
              d="M213,163H55l0,0C24.5,115.8,23.9,55.2,53.5,7.4L55,5L213,163z"
            />
            <radialGradient
              id="e"
              cx="256"
              cy="291"
              r="234.155"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".737" stop-color="#ffc970" />
              <stop offset="1" stop-color="#ffb233" />
            </radialGradient>
            <path
              fill="url(#e)"
              d="M372.3,487.4L372.3,487.4c-34.6,12.9-71.2,19.6-108.1,19.6h-16.3
			c-36.9,0-73.6-6.6-108.1-19.6l0,0C58.7,457.1,5,379.7,5,293.2v0c0-50.4,18.3-99,51.6-136.9l0,0C102,104.6,167.4,75,236.2,75h39.6
			c68.8,0,134.2,29.6,179.6,81.3l0,0c33.3,37.9,51.6,86.5,51.6,136.9v0C507,379.7,453.3,457.1,372.3,487.4z"
            />
            <radialGradient
              id="f"
              cx="-2344"
              cy="291"
              r="234.155"
              gradientTransform="matrix(-1 0 0 1 -2088 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".737" stop-color="#ffc970" />
              <stop offset="1" stop-color="#ffb233" />
            </radialGradient>
            <path
              fill="url(#f)"
              d="M139.7,487.4L139.7,487.4c34.6,12.9,71.2,19.6,108.1,19.6h16.3c36.9,0,73.6-6.6,108.1-19.6
			l0,0c81-30.3,134.7-107.7,134.7-194.3v0c0-50.4-18.3-99-51.6-136.9l0,0C410,104.6,344.6,75,275.8,75h-39.6
			c-68.8,0-134.2,29.6-179.6,81.3l0,0C23.3,194.1,5,242.8,5,293.2v0C5,379.7,58.7,457.1,139.7,487.4z"
            />
            <linearGradient
              id="g"
              x1="256"
              x2="256"
              y1="318.5"
              y2="497.101"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".483" stop-color="#ebeae0" />
              <stop offset="1" stop-color="#d7d5c1" />
            </linearGradient>
            <path
              fill="url(#g)"
              d="M256,240L256,240c-12.4,0-23.9,6.5-30.2,17.2l-8.4,14.1c-6.5,11-18.4,17.7-31.1,17.7h0
			c-20,0-36.2,16.2-36.2,36.2v165.8c31.5,10.5,64.6,15.9,97.8,15.9h16.3c33.3,0,66.3-5.4,97.8-15.9V325.2c0-20-16.2-36.2-36.2-36.2
			h0c-12.8,0-24.6-6.7-31.1-17.7l-8.4-14.1C279.9,246.5,268.4,240,256,240z"
            />
            <linearGradient
              id="h"
              x1="256"
              x2="256"
              y1="328"
              y2="424"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#e25d55" />
              <stop offset="1" stop-color="#db3429" />
            </linearGradient>
            <path
              fill="url(#h)"
              d="M256,414L256,414c-26.5,0-48-21.5-48-48v-46h96v46C304,392.5,282.5,414,256,414z"
            />
            <path
              fill="#b3271e"
              d="M297.6,390c-8.3-14.3-23.8-24-41.6-24h0c-17.8,0-33.3,9.7-41.6,24c8.3,14.3,23.8,24,41.6,24
			h0C273.8,414,289.3,404.3,297.6,390z"
            />
            <path
              fill="#e36414"
              d="M231 75.1c0 38.6 11.2 69.9 25 69.9s25-31.3 25-69.9c-1.7 0-3.5-.1-5.2-.1h-39.6C234.5 75 232.7 75 231 75.1zM207.6 128.7c7.7-2.8 6.8-25.3-1.7-51.8-10.9 1.4-21.6 3.5-32.1 6.4C184.5 111.5 199.4 131.7 207.6 128.7zM306.2 77c-8.5 26.5-9.4 49-1.7 51.8 8.2 3 23.1-17.2 33.8-45.4C327.8 80.5 317 78.3 306.2 77z"
            />
            <rect width="10" height="60" x="251" y="260" fill="#b24e10" />
            <path
              fill="#e36414"
              d="M261.9,240h-11.7c-7.8,0-14.1,6.3-14.1,14.1v0c0,3.8,1.5,7.3,4.1,10L256,280l15.9-15.9
			c2.7-2.7,4.1-6.2,4.1-10v0C276,246.3,269.7,240,261.9,240z"
            />
            <path
              fill="#b24e10"
              d="M304,325h-96c-13.8,0-25-11.2-25-25h10c0,8.3,6.7,15,15,15h96c8.3,0,15-6.7,15-15h10
				C329,313.8,317.8,325,304,325z"
            />
            <path
              fill="#e36414"
              d="M9.2 334.5c2.1 10.6 5.1 20.9 8.8 30.9 25.8-10.5 43.6-24.2 40.8-31.9C56 325.9 34.7 326.6 9.2 334.5zM58.7 280.6c3.1-8.4-18.5-24-48.2-34.8 0 0 0 0 0 0-2.5 10.7-4.2 21.6-5 32.7C32.7 287.3 55.9 288.4 58.7 280.6zM501.5 245.7C501.5 245.7 501.5 245.7 501.5 245.7c-29.7 10.8-51.3 26.4-48.2 34.8 2.9 7.8 26.1 6.7 53.2-2.2C505.7 267.3 504 256.4 501.5 245.7zM453.3 333.4c-2.8 7.7 15 21.4 40.8 31.9 3.7-10 6.7-20.3 8.8-30.9C477.3 326.6 456 325.9 453.3 333.4z"
            />
            <rect
              width="10"
              height="41.2"
              x="43"
              y="303.4"
              fill="#b24e10"
              transform="rotate(75.96 47.998 324.014)"
            />
            <rect
              width="41.2"
              height="10"
              x="27.4"
              y="289"
              fill="#b24e10"
              transform="rotate(14.035 48.004 294.044)"
            />
            <rect
              width="10"
              height="41.2"
              x="459"
              y="273.4"
              fill="#b24e10"
              transform="rotate(75.96 464.016 294.018)"
            />
            <rect
              width="41.2"
              height="10"
              x="443.4"
              y="319"
              fill="#b24e10"
              transform="rotate(14.035 464.065 324.054)"
            />
            <path
              fill="#b24e10"
              d="M337.8 264.5l-40-20c-1.7-.8-2.8-2.6-2.8-4.5s1.1-3.6 2.8-4.5l40-20 4.5 8.9L311.2 240l31.1 15.5L337.8 264.5zM174.2 264.5l-4.5-8.9 31.1-15.5-31.1-15.5 4.5-8.9 40 20c1.7.8 2.8 2.6 2.8 4.5s-1.1 3.6-2.8 4.5L174.2 264.5z"
            />
            <radialGradient
              id="i"
              cx="122"
              cy="282.917"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".417" stop-color="#2a539d" />
              <stop offset="1" stop-color="#1f3e75" />
            </radialGradient>
            <path
              fill="url(#i)"
              d="M130,320L130,320c16.6,0,30-13.4,30-30v-30h-30c-16.6,0-30,13.4-30,30v0
			C100,306.6,113.4,320,130,320z"
            />
            <radialGradient
              id="j"
              cx="374"
              cy="282.917"
              r="30"
              gradientTransform="matrix(-1 0 0 1 764 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".417" stop-color="#2a539d" />
              <stop offset="1" stop-color="#1f3e75" />
            </radialGradient>
            <path
              fill="url(#j)"
              d="M382,320L382,320c-16.6,0-30-13.4-30-30v-30h30c16.6,0,30,13.4,30,30v0
			C412,306.6,398.6,320,382,320z"
            />
            <g>
              <rect width="10" height="40" x="251" y="280" fill="#4d2419" />
              <path
                fill="#4d2419"
                d="M304 325h-96c-13.8 0-25-11.2-25-25h10c0 8.3 6.7 15 15 15h96c8.3 0 15-6.7 15-15h10C329 313.8 317.8 325 304 325zM205.9 134c-14.2 0-29.5-29.9-36.8-49l9.3-3.6c11.7 30.8 24.4 42.9 27.5 42.5 2.3-1.5 4.4-16.9-4.8-45.6l9.5-3c2.8 8.6 15.6 51.8-1.3 58C208.1 133.8 207 134 205.9 134zM306.1 134c-1.1 0-2.3-.2-3.4-.6-17-6.2-4.1-49.4-1.3-58l9.5 3c-9.2 28.7-7.1 44-4.7 45.6 3 .3 15.7-11.7 27.4-42.5l9.3 3.6C335.7 104.1 320.4 134 306.1 134zM256 150c-19.5 0-30-38.6-30-75h10c0 39.7 11.8 65 20 65 8.2 0 20-25.3 20-65h10C286 111.4 275.5 150 256 150z"
              />
              <rect
                width="10"
                height="41.2"
                x="43"
                y="303.4"
                fill="#4d2419"
                transform="rotate(75.96 47.998 324.014)"
              />
              <rect
                width="41.2"
                height="10"
                x="27.4"
                y="289"
                fill="#4d2419"
                transform="rotate(14.035 48.004 294.044)"
              />
              <rect
                width="10"
                height="41.2"
                x="459"
                y="273.4"
                fill="#4d2419"
                transform="rotate(75.96 464.016 294.018)"
              />
              <rect
                width="41.2"
                height="10"
                x="443.4"
                y="319"
                fill="#4d2419"
                transform="rotate(14.035 464.065 324.054)"
              />
              <path
                fill="#4d2419"
                d="M256 285c-1.3 0-2.6-.5-3.5-1.5l-15.9-15.9c-3.6-3.6-5.6-8.4-5.6-13.5 0-10.6 8.6-19.1 19.1-19.1h11.7c10.6 0 19.1 8.6 19.1 19.1 0 5.1-2 9.9-5.6 13.5l-15.9 15.9C258.6 284.5 257.3 285 256 285zM250.1 245c-5 0-9.1 4.1-9.1 9.1 0 2.4 1 4.7 2.7 6.5l12.3 12.3 12.3-12.3c1.7-1.7 2.7-4 2.7-6.5 0-5-4.1-9.1-9.1-9.1H250.1zM50.8 165.7c-.6-1-1.2-1.9-1.8-2.9-14.6-23.8-22.3-51.1-22.3-79 0-28 7.8-55.3 22.6-79l1.5-2.4C51.7.9 53.3 0 55 0h1.5c55.1 0 105.7 30 132 78.3l-8.8 4.8c-24.4-44.7-71.1-72.7-122-73.1l0 0c-28.2 45.5-28.3 102-.3 147.5.6.9 1.1 1.8 1.7 2.7L50.8 165.7z"
              />
              <rect
                width="125.4"
                height="10"
                x="36.6"
                y="44.3"
                fill="#4d2419"
                transform="rotate(45.001 99.321 49.32)"
              />
              <rect
                width="125.4"
                height="10"
                x="36.6"
                y="44.3"
                fill="#4d2419"
                transform="rotate(45.001 99.321 49.32)"
              />
              <path
                fill="#4d2419"
                d="M461.2,165.7l-8.4-5.4c0.6-0.9,1.1-1.8,1.7-2.7c28-45.5,27.9-102.1-0.3-147.5l0,0
				c-50.9,0.5-97.6,28.4-122,73.1l-8.8-4.8C349.8,30,400.4,0,455.5,0h1.5c1.7,0,3.3,0.9,4.3,2.4l1.5,2.4
				c14.7,23.8,22.5,51.1,22.6,79c0,27.9-7.7,55.2-22.3,79C462.4,163.8,461.8,164.8,461.2,165.7z"
              />
              <rect
                width="10"
                height="125.4"
                x="407.7"
                y="-13.4"
                fill="#4d2419"
                transform="rotate(45.004 412.654 49.317)"
              />
              <path
                fill="#4d2419"
                d="M264.2 512h-16.3c-37.7 0-74.6-6.7-109.9-19.9-40.7-15.2-75.3-42.2-100.1-77.9C13.1 378.5 0 336.6 0 293.2 0 241.5 18.8 191.8 52.8 153c3.1-3.6 6.4-7.1 9.8-10.5l7.1 7c-3.2 3.2-6.4 6.6-9.4 10.1C27.9 196.5 10 244 10 293.2c0 84 52.8 160.1 131.5 189.6 34.1 12.8 69.9 19.3 106.4 19.3h16.3c36.5 0 72.3-6.5 106.4-19.3C449.2 453.3 502 377.1 502 293.2c0-49.2-17.9-96.6-50.4-133.6-3.4-3.8-6.9-7.6-10.5-11.2l7.1-7.1c3.8 3.7 7.4 7.7 10.9 11.7 34.1 38.8 52.8 88.6 52.8 140.2 0 43.5-13.1 85.3-37.9 121-24.8 35.7-59.4 62.7-100.1 77.9C338.8 505.3 301.8 512 264.2 512zM411.1 123.1C371.4 94.9 324.6 80 275.8 80h-39.6c-48.7 0-95.5 14.9-135.3 43.1l-5.8-8.2C136.6 85.5 185.4 70 236.2 70h39.6c50.8 0 99.6 15.5 141.1 44.9L411.1 123.1z"
              />
              <path
                fill="#4d2419"
                d="M337.8 264.5l-40-20c-1.7-.8-2.8-2.6-2.8-4.5s1.1-3.6 2.8-4.5l40-20 4.5 8.9L311.2 240l31.1 15.5L337.8 264.5zM174.2 264.5l-4.5-8.9 31.1-15.5-31.1-15.5 4.5-8.9 40 20c1.7.8 2.8 2.6 2.8 4.5s-1.1 3.6-2.8 4.5L174.2 264.5zM256 419c-29.2 0-53-23.8-53-53v-46c0-2.8 2.2-5 5-5h96c2.8 0 5 2.2 5 5v46C309 395.2 285.2 419 256 419zM213 325v41c0 23.7 19.3 43 43 43 23.7 0 43-19.3 43-43v-41H213zM130 325c-19.3 0-35-15.7-35-35s15.7-35 35-35h30c2.8 0 5 2.2 5 5v30C165 309.3 149.3 325 130 325zM130 265c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25v-25H130zM382 325c-19.3 0-35-15.7-35-35v-30c0-2.8 2.2-5 5-5h30c19.3 0 35 15.7 35 35S401.3 325 382 325zM357 265v25c0 13.8 11.2 25 25 25s25-11.2 25-25-11.2-25-25-25H357z"
              />
              <path
                fill="#4d2419"
                d="M256,419c-18.8,0-36.4-10.2-45.9-26.5c-0.9-1.5-0.9-3.5,0-5c9.5-16.3,27-26.5,45.9-26.5
				c18.8,0,36.4,10.2,45.9,26.5c0.9,1.5,0.9,3.5,0,5C292.4,408.8,274.8,419,256,419z M220.3,390c8,11.8,21.4,19,35.7,19
				c14.3,0,27.7-7.2,35.7-19c-8-11.8-21.4-19-35.7-19S228.3,378.2,220.3,390z"
              />
            </g>
          </svg>
          {/* <img src="laugh_emoji.svg" alt="Laugh Emo" /> */}
          <button className="JokesList-new-jokes">New Jokes</button>
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
  }
}

export default JokesList;
