import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Gallerydetails from './Gallerydetails';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
   
<Router>
  <Switch>
      <Route path="/" exact component={Gallery} />
 <Route path="/:photo_id" exact component={Gallerydetails} />
      </Switch>
     </Router>
       
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
