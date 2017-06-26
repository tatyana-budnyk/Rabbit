import React, { PropTypes } from 'react';
import { actionDeleteHunter } from '../../actions/actionDeleteHunter';
import { connect } from 'react-redux';

class UnSubscribeForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { hunter: { hunterName: '' } };
    }

    handleDelete = (event) => {
        event.preventDefault();
        this.props.dispatch(actionDeleteHunter(this.state.hunter));
        this.setState({ hunter: { hunterName: '' } });
    }

    onChangeName = (event) => {
        const hunter = this.state.hunter;
        hunter.hunterName = event.target.value;
        this.setState({ hunter: hunter });
    }

    render() {
        return (
            <div className="container">
                <h2>UnSubscribe form</h2>
            <form className="form-horizontal" onSubmit={this.handleDelete}>
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
                               <button type="submit">Unsubscribe</button>
                        </div>
                     </div>
                </form>
            </div>    
        );
    }
}

UnSubscribeForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    hunters: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        hunters: state.hunterReducer
    };
};

export default connect(mapStateToProps)(UnSubscribeForm);

