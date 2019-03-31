import React, { Component } from "react";
import Loader from "../Loader/Loader";

class ShowDetailed extends Component {
  state = {
    rating: ""
  };

  componentDidMount() {
    fetch(`http://localhost:3002/${this.props.show.imdbID}`)
      .then(r => r.json())
      .then(resp => this.setState({ rating: resp }));
  }

  render() {
    return (
      <section>
        <h1>{this.props.show.title}</h1>
        <h2>{this.props.show.year}</h2>
        {this.state.rating ? <h5>{this.state.rating}</h5> : <Loader />}

        <p>{this.props.show.description}</p>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${
            this.props.show.trailer
          }`}
          frameBorder="0"
          allowFullScreen
          title={`Trailer for ${this.props.show.title}`}
        />
      </section>
    );
  }
}

export default ShowDetailed;
