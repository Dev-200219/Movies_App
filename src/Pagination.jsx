let Pagination = (props) => {
    let arr = [];

    for(let i = 1; i <= props.numberOfPages; i++)
    {
        arr.push(i);
    }

    return <nav>
        <ul class="pagination mt-4">
            {
                arr.map((ele)=>{
                    return <li key={ele} onClick={()=>{
                        props.changePage(ele);
                    }} 
                    class={`page-item ${props.currPage === ele ? "active" : ""}`}><a class="page-link" href="/#">{ele}</a></li> 
                })
            }
        </ul>
    </nav>
}

export default Pagination;