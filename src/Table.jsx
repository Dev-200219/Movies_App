import React from 'react';
import Pagination from "./Pagination";
import "./Table.css"

class Table extends React.Component{

    state={
        currPage : 1
    }
    
    render(){
        let filteredMoviesArr = this.props.moviesData.filter((ele) => {
            if (this.props.genreSelected === "All Genre")
                return ele;
            else if (ele.genre.name === this.props.genreSelected)
                return ele;
        })
    
        let arrToBeUsedInTable = filteredMoviesArr.slice(0, 4);
        
        return (
            <>
                <div class="row mt-2">
                    <div class="col-10">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rate</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    arrToBeUsedInTable.map((ele) => {
                                        return (
                                            <tr key={ele._id}>
                                                <td>{ele.title}</td>
                                                <td>{ele.genre.name}</td>
                                                <td>{ele.numberInStock}</td>
                                                <td>{ele.dailyRentalRate}</td>
                                                <td onClick={() => {
                                                    this.props.toggleLike(ele._id);
                                                }}>
                                                    {
                                                        ele.liked ? <span class="material-icons-outlined">
                                                            favorite
                                                        </span> : <span class="material-icons-outlined">
                                                            favorite_border
                                                        </span>
                                                    }
                                                </td>
                                                <td>
                                                    <button onClick={ () => {
                                                        this.props.deleteMovie(ele._id)
                                                    }} 
                                                    className="table-dlt-btn">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
    
                <Pagination />
            </>
        )
    }
}

export default Table;