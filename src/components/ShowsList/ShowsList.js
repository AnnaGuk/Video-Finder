import React, { Component } from "react";
import Show from "../Show/Show";
import Search from "../Search/Search";

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
        <header>
          Logo
          <Search
            handleEvent={this.handleSearchInput}
            handleClick={this.handleSearchClick}
            value={this.state.value}
          />
        </header>
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
