import React, { PropTypes } from 'react';
import { actionAddHunter } from '../../actions/actionAddHunter';
import { actionDeleteHunter } from '../../actions/actionDeleteHunter';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SubscribeForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { hunter: { hunterName: '' } };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(actionAddHunter(this.state.hunter));
        this.setState({ hunter: { hunterName: '' } });
    }

    onChangeName = (event) => {
        const hunter = this.state.hunter;
        hunter.hunterName = event.target.value;
        this.setState({ hunter: hunter });
    }

    hunterList(hunter, index) {
        return <div key={index}>{hunter.hunterName}</div>;
    }

    render() {
        const hunters = this.props.hunters;
        const list = hunters ? hunters.map((item, index) => { return <div key={index}>{item.hunterName}</div>;}) : "--";
        return (
            <div className="container">
                <h2>Subscribe form</h2>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label col-sm-2">Your name:</label>
                <div className="col-sm-5">
                        <input type="text" className="form-control"
                         id="name" placeholder="Enter your name" 
                         value={this.state.hunter.hunterName} onChange={this.onChangeName} />
                </div>
                    </div>
                    <div className="form-group">
                <label className="control-label col-sm-2">Password:</label>
                        <div className="col-sm-5">          
                     <input type="password" className="form-control" id="pwd" placeholder="Enter password"  />
                     </div>
                    </div>
    
                    <div classclassName="form-group">        
                             <div classclassName="col-sm-offset-2 col-sm-5">
                                <button type="submit" classclassName="btn btn-default">Submit</button>
                        </div>
                     </div>
                </form>
                <ul>{list}</ul>
                If you don't want to recieve coordinates in future follw the link <Link to="/unsubscribe">UnSubscribe</Link>
            </div>    
        );
    }
}

SubscribeForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    hunters: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        hunters: state.hunterReducer
    };
};

export default connect(mapStateToProps)(SubscribeForm);

/* validation
const existingItem = state.filter((obj) => {
                return obj.hunterName === action.hunter.hunterName;
            });
            if (existingItem.length === 0) {
                return [...state, Object.assign({}, action.hunter)];
            } 

*/