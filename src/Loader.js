import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Loader extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render(){
return ReactDOM.createPortal(
    this.props.show && <div style={{zIndex: '9999'}} className="position-fixed w-100 h-100 d-flex justify-content-center bg-white">
     <div className="spinner-border text-muted align-self-center"></div> </div>,document.getElementById('apploader')
  )
}

  }
  


export default Loader;