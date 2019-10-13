import React from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../../store';

class Button extends React.Component {
    handleClick() {
        const { dispatch } = this.props;

        dispatch(addCounter());
    }
render() {
    return(
        <button onClick={()=> this.handleClick()}>Sum</button>
    )
}
}

function mapStateToProps(props) {
    return {}
}

export default connect(mapStateToProps)(Button);