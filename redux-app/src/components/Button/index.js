import React from 'react';
import { connect } from 'react-redux';
import { addCounter, counterReset } from '../../store';

class Button extends React.Component {
    handleClick() {
        const { dispatch } = this.props;

        dispatch(addCounter());
    }

    handleClickReset() {
        const { dispatch } = this.props;
        dispatch(counterReset());
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>Sum</button>
                <button onClick={() => this.handleClickReset()}>Reset</button>
            </div>
        )
    }
}

function mapStateToProps(props) {
    return {}
}

export default connect(mapStateToProps)(Button);