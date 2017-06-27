import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { moveRabbit } from '../../actions/actionRabbit';


class HomePage extends React.Component {
    constructor(props, context) {
        super(props, constructor);
        
        this.state = { x: 0, y: 0 };
    }

    handleClick = () => { 
        this.props.dispatch(moveRabbit());
    }

    render() {
        const hunters = this.props.hunters;

        const list = hunters.map((item, index) => { return <div key={index} className="hunter">
            <div className="avatar">-</div> <div>{item} ( x = {this.props.x},  y = {this.props.y} )</div></div>;});
       
        return (
            <div className="row">

                <div className="col-md-9"> 
                    <button className="btn-lg" type="button" onClick={this.handleClick}>MOVE RABBIT</button>
                    <div className="rabbit" style={{top: this.props.y + 'px', 
                                                    left: this.props.x + 'px'}}></div>
                </div>
                
                <div className="col-md-3"> <h1>Hunters ...</h1>
                     {list}
                </div>    
            </div>
        );
    }
}

HomePage.propTypes = {
        x: PropTypes.number,
        y: PropTypes.number,
        hunters: PropTypes.array,
        dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
    return {
        x: state.rabbitReducer.x,
        y: state.rabbitReducer.y,
        hunters: state.hunterReducer
    };
}

export default connect(mapStateToProps)(HomePage);

