import React from "react";
import Child from './Child'

class App extends React.Component{
  state={
    child : true
  }

  render() {
    return(
      <div>
        <button onClick = {
          () => {
          if(this.state.child)
          {
              this.setState({child:false})
          }
          else
          {
            this.setState({child:true})
          }
        }}>Child Toogle</button>

        {this.state.child ? <Child/> : ""}
      </div>
    )
  } 

}
export default App;
