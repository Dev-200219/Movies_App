import React from "react";

class Child extends React.Component{
    constructor(props)
    {
        super(props);
        console.log("Constructor was called");
        this.state={
            on:false
        }
    }

    componentDidMount(){
        console.log("Component did mount was called");
    }

    componentDidUpdate(){
        console.log("component did update was called");
    }

    componentWillUnmount(){
        console.log("component will unmount was called");
    }

    render() {
        console.log("render was called");
        return(
            <button onClick ={
                () =>{
                    if(this.state.on)
                    {
                        this.setState({on:false})
                    }
                    else
                    {
                        this.setState({on:true})
                    }
                }
            }>click</button>
        )
    }
}

export default Child;