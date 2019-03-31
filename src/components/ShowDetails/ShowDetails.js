import React, { Component } from "react";
import Loader from "../Loader/Loader";
import styled from "styled-components";

const Description = styled.section`
  color: rgb(46, 139, 87);
  padding: 0.3125rem;
  margin: 0.3125rem;
  text-align: center;
`;

class ShowDetails extends Component {
  state = {
    rating: ""
  };

  componentDidMount() {
    fetch(`http://localhost:3002/${this.props.show.imdbID}`)
      .then(r => r.json())
      .then(resp => this.setState({ rating: resp }))
      .catch(() => this.setState({ rating: "No imdb data avalaible." }));
  }

  render() {
    return (
      <Description>
        <h1>{this.props.show.title}</h1>
        <h2>{this.props.show.year}</h2>
        {this.state.rating ? <h5>{this.state.rating}</h5> : <Loader />}
        <p>{this.props.show.description}</p>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${
            this.props.show.trailer
          }`}
          frameBorder="0"
          width="600"
          height="400"
          allowFullScreen
          title={`Trailer for ${this.props.show.title}`}
        />
      </Description>
    );
  }
}

export default ShowDetails;
