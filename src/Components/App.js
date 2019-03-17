import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header';
import BlockList from './routers/BlocksList';
import LatestBlock from './routers/LatestBlock';
import SelectedBlock from './routers/SelectedBlock';
import Transaction from './routers/Transcation';

const App = () => {
  //navigation functionality
  return (
    <div className="ui container">
      <Router>
        <div> 
          <Header />
          <Switch>
          <Route exact path='/' component={BlockList} />
          <Route exact path='/latestblock' component={LatestBlock} />
          <Route exact path='/singleblock/:hash' component={SelectedBlock} />
          <Route exact path='/singleblock/transaction/:hash' component={Transaction} />
        </Switch>
        </div>
       
        </Router>
  </div>
  )
}
export default App;
