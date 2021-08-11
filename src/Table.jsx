import Pagination from "./Pagination";

let Table = (props) => {

    let filteredMoviesArr = props.moviesData.filter((ele) =>{
       if(props.genreSelected === "All Genre")
       return ele;
        else if(ele.genre.name === props.genreSelected)
        return ele;
    })
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
                    filteredMoviesArr.map((ele) =>{
                        return(
                            <tr key={ele._id}>
                                <td>{ele.title}</td>
                                <td>{ele.genre.name}</td>
                                <td>{ele.numberInStock}</td>
                                <td>{ele.dailyRentalRate}</td>
                                <td>Like</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }   
                </tbody>
            </table>
        </div>
    </div>
    
    <Pagination/>
    </>
    )
}

export default Table;