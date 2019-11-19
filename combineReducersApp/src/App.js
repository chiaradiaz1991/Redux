import React from 'react';
import { connect } from 'react-redux';
import Filters from './components/Filters/index';
import AddTask from './components/AddTask/index';
import Tasks from './components/Tasks/index';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddTask />
        <br />
        <Filters />
        <br />
        <Tasks />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    counterReset: state.counterReset,
    test: state.name //puede tener otro nombre la clave si la propiedad es la que corresponde. se puede llamar test en vez de name mientras que llame a name 
  }
}

export default connect(mapStateToProps)(App);
