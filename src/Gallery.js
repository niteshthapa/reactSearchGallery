import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';
const axios = require('axios');
class Gallery extends Component {
  constructor(props){
    super(props)
    this.inputRef = React.createRef();
      this.inputRef2 = React.createRef();
 this.state = {
   isLoader:true,
   init:10,
    photos:[],
    visiblePhoto:[]
  };
  
  }
 
componentDidMount(){
 
  axios.get('https://jsonplaceholder.typicode.com/photos')
  .then((response)=> {
       console.log(response.data.slice(0,this.state.init));
       this.setState({

          photos:response.data.slice(0,this.state.init),
         visiblePhoto:response.data.slice(0,this.state.init),
         isLoader:false
       })
  })
  .catch(function (error) {
    console.log(error);
  })

}
filterText = ()=>{
    let filterPhoto = this.state.photos.filter((photo)=>{
        //console.log(photo)
        return photo.title.indexOf(this.inputRef.current.value) !==-1 ;
    })
    console.log(filterPhoto)
  //console.log(this.inputRef.current.value)
  this.setState({
    visiblePhoto:filterPhoto
  })
}
componentDidUpdate(a,b,c) {
if(b.init !== this.state.init){
     this.setState({
init:this.inputRef2.current.value,
 isLoader:true
        })
         axios.get('https://jsonplaceholder.typicode.com/photos')
  .then((response)=> {
       console.log(response.data.slice(0,this.state.init));
       this.setState({
          photos:response.data.slice(0,this.state.init),
         visiblePhoto:response.data.slice(0,this.state.init),
         isLoader:false
       })
  })
  .catch(function (error) {
    console.log(error);
  })
}
  }

updatePageNumber =()=>{
     this.setState({
            init:this.inputRef2.current.value
        },()=>{
console.log(this.state.init)
        })
        
 console.log("update");
  }

  render() {
    
    return (

      <div className="container-fluid" >
       <Loader show={this.state.isLoader} />
      <div className="row">
       <div className="col">
       <div className="form-group">
    <label>Search Photos</label>
    <input type="text" ref={this.inputRef} onChange={this.filterText}  className="form-control" placeholder="Type here" />
     </div>
  </div>
   <div className="col">
       <div className="form-group">
    <label>Items per page</label>
    <select className="form-control" ref={this.inputRef2} onChange={this.updatePageNumber}>
  <option value="10">10</option>
  <option value="100">100</option>
 <option value="200">200</option>
   <option value="300">300</option>
     <option value="400">400</option>
  <option value="500">500</option>
 <option value="600">600</option>
   <option value="700">700</option>
   <option value="3000">3000</option>
      <option value="5000">5000</option>

</select>
     </div>
  </div>
      </div>
      <div className="row" >
        {this.state.visiblePhoto.map(photo=>{
          return(
            <div key={photo.id} className="col-md-3">

         <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={photo.thumbnailUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{photo.title}</h5>
          <NavLink to={`/${photo.id}`} className="btn btn-primary">Go somewhere</NavLink>
         
        </div>
      </div>
            </div>
          )
        })
         
        
        }
         </div>
      </div>
    );
  }
}
export default Gallery;