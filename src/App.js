import React, { Component } from 'react';
import Header from './content/header/header';
import Footer from './content/footer/footer';
import Main from './content/main/main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }

  updateIndex(index) {
    this.setState({index});
  }

  render() {
    return (
      <div className="App">
        <Header index={this.state.index} updateIndex={(ind) => this.updateIndex(ind)} />
        <Main index={this.state.index} updateIndex={(ind) => this.updateIndex(ind)} />
        <Footer />
      </div>
    );
  }
}

export default App;
