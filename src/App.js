import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';
import { Products } from './products';
// import { Layout } from './components/Layout';
import { Navigationbar } from './components/Navigationbar';
import { PageFooter } from './components/footer';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Navigationbar/>
        {/* <Layout> */}
          <Router>
            <Switch>
              <Route exact path ="/" component={Home}/>
              <Route path ="/about" component={About}/>
              <Route path ="/contact" component={Contact}/>
              <Route path ="/products" component={Products}/> 
            </Switch>
          </Router>
        {/* </Layout> */}
        <PageFooter/>
      </React.Fragment>  
    )
  }
}

export default App;