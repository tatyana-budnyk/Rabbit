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
            <div className="row">

                <div className="col-md-9"> 
                    <button className="btn" type="button" onClick={this.handleClick}>MOVE RABBIT</button>
                    <div className="rabbit" style={{top: this.props.x + 'px', 
                                                    left: this.props.y + 'px'}}>
                    </div>
                </div>

                <div className="col-md-3"> Hunters here...
                    <h1>Coordinates: x = {this.props.x} y = {this.props.y} </h1>
                </div>    
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
    console.log("***mapStateToProps", state);
    return {
        x: state.rabbitReducer.x,
        y: state.rabbitReducer.y
    };
}

export default connect(mapStateToProps)(HomePage);

