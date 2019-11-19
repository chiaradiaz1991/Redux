import React from 'react';
import { connect } from 'react-redux';
import { addCounter, counterReset } from '../../store';

class Input extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}

function mapStateToProps(props) {
    console.log(props)
    return {
  }

}

export default connect(mapStateToProps)(Input);