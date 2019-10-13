import React from 'react';
import { connect } from 'react-redux';
import Button from './components/Button/index';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        {this.props.counter !== 0 ? (
          <div>
            Counter: {this.props.counter} <br />
          </div>) : (
            <div>
              Counter: {this.props.counterReset}<br />
            </div>)
        }
        <br />
        <Button />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    counter: state.counter,
    counterReset: state.counterReset,
    test: state.name //puede tener otro nombre la clave si la propiedad es la que corresponde. se puede llamar test en vez de name mientras que llame a name 
  }
}

export default connect(mapStateToProps)(App);
