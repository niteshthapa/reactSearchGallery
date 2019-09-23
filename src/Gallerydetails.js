import React, { Component } from 'react';
import Loader from './Loader';
const axios = require('axios');

class Gallerydetails extends Component {
  constructor(props){
    super(props)
    
this.state = {
    photodetails:{},
    
      isLoader:true
  };
  }
componentDidMount(){
console.log(this.state.isLoader)
const {match} =  this.props;

  axios.get(`https://jsonplaceholder.typicode.com/photos/${match.params.photo_id}`)
  .then((response)=> {
       this.setState({
         photodetails:response.data,
         isLoader:false
         
       },()=>{
console.log(this.state.isLoader)
       })
  })
  .catch(function (error) {
    console.log(error);
  })

}

  render() {
    const photoDetails = this.state.photodetails
    return (
      <div>
       <Loader show={this.state.isLoader} />
 <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={photoDetails.thumbnailUrl} alt="Card image cap" />
      
      {photoDetails.title}
         </div>
      </div>
    );
  }
}
export default Gallerydetails;