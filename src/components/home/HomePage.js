import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { moveRabbit } from '../../actions/actionRabbit';


class HomePage extends React.Component {
    constructor(props, context) {
        super(props, constructor);
        
        this.state = { x: 0, y: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () { 
        this.props.dispatch(moveRabbit());
    }

    render() {
        return (
            <div>
                <h1>Coordinates: x = {this.props.x} y = {this.props.y} </h1>
                <button type="button" onClick={this.handleClick}>MOVE RABBIT</button>
            </div>
        );
    }
}

HomePage.propTypes = {
        x: PropTypes.number.x,
        y: PropTypes.number.y,
        dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
    return {
        x: state.rabbitReducer.x,
        y: state.rabbitReducer.y
    };
}

export default connect(mapStateToProps)(HomePage);

