import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter"
import Search from "./Search";
import Table from "./Table";

class App extends React.Component{

  state ={
    movies : [],
    genre : [],
    genreSelected: "All Genre"
  }

  changeGenre = (newGenre) => {
    this.setState({genreSelected : newGenre});
  }

  toggleLike = (id) => {

    let index = this.state.movies.findIndex((el)=>{
          return el._id == id;
    })

    let currMoviesArr = this.state.movies.map((el) => el)

    if(currMoviesArr[index].liked)
    {
      currMoviesArr[index].liked = false;
    }
    else
    {
      currMoviesArr[index].liked = true;
    }

    this.setState({movies : currMoviesArr});
  }

  deleteMovie = (id) => {
    let currMoviesArr = this.state.movies.filter((el) => {
      return el._id !== id;
    })

    this.setState({movies:currMoviesArr})
  }

  componentDidMount(){
    let f = async () =>{
      let moviesResponse = await fetch("/movies")
      let moviesData = await moviesResponse.json();
      let genreResponse = await fetch("/genre")
      let genreData = await genreResponse.json();

      this.setState({movies : moviesData,
      genre : genreData
      })
    }
    f();
  }  

  render() {
    return(
      <div>
        <Navbar/>

        <div className="row">
        
        <div class="col-3">
        <Filter genre={this.state.genre} genreSelected={this.state.genreSelected} changeGenre={this.changeGenre}/>
        </div>

        <div className="col-9 mt-4">
          <Search genreSelected={this.state.genreSelected} moviesData={this.state.movies}/>
          <Table moviesData={this.state.movies} genreSelected={this.state.genreSelected} toggleLike={this.toggleLike} deleteMovie={this.deleteMovie}/>
        </div>
        </div>
        
      </div>
    )
  } 

}

export default App;
