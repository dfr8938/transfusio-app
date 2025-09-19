import React from "react";

import "./App.css";

import { SearchPanel, ListItem } from "./components";

import { listAnswers } from "../database";

class App extends React.Component {
  state = {
    listAnswers: listAnswers,
    term: "",
  };

  searchTerm = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.question.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {
    const { listAnswers, term } = this.state;

    const visibleItems = this.search(listAnswers, term);

    return (
      <div className="app">
        <SearchPanel searchTerm={this.searchTerm} />
        <ul className="list">
          {visibleItems.map((item, i) => (
            <ListItem item={item} i={i} />
          ))}
        </ul>
      </div>
    );
  }
}

export { App };
