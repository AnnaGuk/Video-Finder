import React, { Component } from "react";
import styled from "styled-components";
import Show from "../Show/Show";
import Search from "../Search/Search";

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 2rem;
  margin: 0.2rem;
  padding: 0.3125rem;
`;

class ShowsList extends Component {
  state = {
    value: ""
  };

  handleSearchInput = event => {
    this.setState({ value: event.target.value });
  };

  handleSearchClick = () => {
    console.log(this.state.value);
  };

  render() {
    return (
      <>
        <Header>
          <Image src="/img/iconfinder.svg" alt="Logo" />
          <Search
            handleEvent={this.handleSearchInput}
            handleClick={this.handleSearchClick}
            value={this.state.value}
          />
        </Header>
        <section>
          {this.props.shows
            .filter(show =>
              `${show.title} ${show.description}`
                .toUpperCase()
                .includes(this.state.value.toUpperCase())
            )
            .map(show => (
              <Show {...show} key={show.imdbID} />
            ))}
        </section>
      </>
    );
  }
}

export default ShowsList;
