import React, { Component } from "react";

import "./SearchPanel.css";

class SearchPanel extends Component {
  state = {
    term: "",
  };

  searchTerm = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.searchTerm(term);
  };

  render() {
    return (
      <div className="search-panel">
        <input
          type="text"
          className="search-input"
          placeholder="Начните вводить..."
          value={this.state.term}
          onChange={this.searchTerm}
        />
      </div>
    );
  }
}

export { SearchPanel };
