import {Component}  from 'react'

class ErrorBoundaries extends Component{
  constructor(){
    super();
    this.state = {hasError:false}
  }
  ComponentDidCatch(error){
   this.setState({hasError:true})
  }


  render(){
    if(this.state.hasError)
    return <h3>Something Went Wrong</h3>
    return this.props.children
  }
}

export default ErrorBoundaries