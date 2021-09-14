import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from "./Customer";
import Login from "./Login";
import Rentals from "./Rentals";

class App extends React.Component {
  state = {
    movies: [
      {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Trip to Italy",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Sixth Sense",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 4,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
    ],
    genre: [
      { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    ],
    genreSelected: "All Genre",
    search: "",
  };

  updateSearch = (value) => {
    this.setState({ search: value });
  };

  changeGenre = (newGenre) => {
    this.setState({ genreSelected: newGenre });
  };

  toggleLike = (id) => {
    let index = this.state.movies.findIndex((el) => {
      return el._id === id;
    });

    let currMoviesArr = this.state.movies.map((el) => el);

    if (currMoviesArr[index].liked) {
      currMoviesArr[index].liked = false;
    } else {
      currMoviesArr[index].liked = true;
    }

    this.setState({ movies: currMoviesArr });
  };

  deleteMovie = (id) => {
    let currMoviesArr = this.state.movies.filter((el) => {
      return el._id !== id;
    });

    this.setState({ movies: currMoviesArr });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <div className="row">
                <div class="col-3">
                  <Filter
                    genre={this.state.genre}
                    genreSelected={this.state.genreSelected}
                    changeGenre={this.changeGenre}
                  />
                </div>

                <div className="col-9 mt-4">
                  <Search
                    genreSelected={this.state.genreSelected}
                    moviesData={this.state.movies}
                    searchValue={this.state.search}
                    updateSearch={this.updateSearch}
                  />
                  <Table
                    searchValue={this.state.search}
                    moviesData={this.state.movies}
                    genreSelected={this.state.genreSelected}
                    toggleLike={this.toggleLike}
                    deleteMovie={this.deleteMovie}
                  />
                </div>
              </div>
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/customer">
              <Customer />
            </Route>

            <Route exact path="/rentals">
              <Rentals />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
