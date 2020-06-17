import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import { fetchData } from './api/';

class App extends React.Component {
  state = {
    fdata: {},
    characters: [],
    characters2: [],
    characters3: [],
    data2: {},
    data3: {},
  };

  async componentDidMount() {
    const url2 = 'http://www.mocky.io/v2/5ecfd6473200009dc1e3d64e';
    const url3 = 'http://www.mocky.io/v2/5ecfd630320000f1aee3d64d';
    const data = await fetchData();
    const data2 = await fetchData(url2);
    const data3 = await fetchData(url3);
    this.setState({ fdata: data });
    this.setState({ data2: data2 });
    this.setState({ data3: data3 });
    this.setState({ characters: data.character });
    this.setState({ characters2: data2.character });
    this.setState({ characters3: data3.character });

    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className='container'>
        <Card
          data={this.state.fdata}
          data2={this.state.data2}
          data3={this.state.data3}
          characters={this.state.characters}
          characters2={this.state.characters2}
          characters3={this.state.characters3}
        />
      </div>
    );
  }
}

export default App;
