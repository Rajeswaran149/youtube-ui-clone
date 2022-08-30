import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from './SearchPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
            <Header></Header>


        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
                <Sidebar></Sidebar>
                <SearchPage></SearchPage>
                {/* <RecommendedVideos></RecommendedVideos>  */}
              </div>
          </Route>
          <Route path="/">
              <div className="app__page">
                <Sidebar></Sidebar>
                <RecommendedVideos></RecommendedVideos> 
              </div>
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
