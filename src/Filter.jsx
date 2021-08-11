let Filter = (props) => {
    return (
            <ul className="list-group m-4">
                <li className = {`list-group-item  ${props.genreSelected == "All Genre" ? "active" : ""}` }

                onClick={() => {
                    props.changeGenre("All Genre")
                }}

                >All Genre</li>
                {
                    props.genre.map((ele) => {
                        return <li 
                        onClick={() => {
                            props.changeGenre(ele.name)
                        }}
                        key={ele._id} 
                        className = {`list-group-item  ${props.genreSelected == ele.name ? "active" : ""}` }>{ele.name}</li>
                    })
                }
            </ul>
    )
}

export default Filter;