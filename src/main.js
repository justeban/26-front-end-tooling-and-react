'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import ChuckNorris from 'chuck-norris-api';
import { say, GOAT } from 'cowsay';

import './style/app.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      content: say({text:'What Should I Say?', cow: GOAT}),
    };

    this.cowsayTalk = this.cowsayTalk.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  cowsayTalk() {

    ChuckNorris.getRandom()
      .then(data => {
        let joke = data.value.joke;
        let cowTalk = say({
          text: joke,
          cow: GOAT,
        });
        this.updateState(cowTalk);
      });

  }

  updateState(content) {
    this.setState({content});
  }

  render() {
    return (
      <main>
        <div className="container">
          <h1>Generate Goatsay Chuck Norris Facts</h1>
          <pre id="cowsay-content">{this.state.content}</pre>
          <a onClick={this.cowsayTalk}>Click Me</a>
        </div>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));