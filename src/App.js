import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RouterMenu from "./RouterMenu";
import BlurImage from './tools/blur_image/BlurImage'

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <RouterMenu />
            </Route>
            <Route path="/blur-image">
              <BlurImage/>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
