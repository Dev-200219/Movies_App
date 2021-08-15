let Search = (props) => {
    let moviesCount = 0;
    
    props.moviesData.map((ele) => {
        let search = props.searchValue.toLowerCase();
        let movieName = ele.title.toLowerCase();
       
        if(props.genreSelected === "All Genre" && movieName.includes(search))
        moviesCount++;
        else if(props.genreSelected === ele.genre.name && movieName.includes(search))
        moviesCount++;
    })
    
    return(
        <> 
        <p>{`Showing ${moviesCount} movies from the database`}</p>
        <button type="button" class="btn btn-primary mt-2">New</button>
        <div class="row mt-4">
            <div class="col-5">
                <div class="input-group mb-3">
                    <input onChange={(e)=>{
                        props.updateSearch(e.currentTarget.value);
                    }}
                     type="text" class="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" value={props.searchValue} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Search;