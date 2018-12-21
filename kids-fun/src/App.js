import React, { Component } from 'react';
import GameStart from './components/gameStart';
import { Route, BrowserRouter } from 'react-router-dom';
import Kids from './components/kidsGame';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={GameStart} />
          <Route path="/start" component={Kids} />
        </div>
      </BrowserRouter>
    );
  }
}


export default DragDropContext(HTML5Backend)(App);
