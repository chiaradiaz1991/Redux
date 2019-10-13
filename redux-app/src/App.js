import React from 'react';
import { connect } from 'react-redux';
import { addCounter } from './store';

class App extends React.Component {

  handleClick() {
    const { dispatch }  = this.props;
    dispatch(addCounter());
  }
  render() {
    return (
      <div className="App">
        Counter: {this.props.counter} <br />
        mi nombre es: {this.props.test}
        <br />
        <button onClick={() => this.handleClick()}>Sum</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    counter: state.counter,
    test: state.name //puede tener otro nombre la clave si la propiedad es la que corresponde. se puede llamar test en vez de name mientras que llame a name 
  }
}

export default connect(mapStateToProps)(App);
