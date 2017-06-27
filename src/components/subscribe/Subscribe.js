import React, { PropTypes } from 'react';
import { actionAddHunter } from '../../actions/actionAddHunter';
import { actionDeleteHunter } from '../../actions/actionDeleteHunter';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SubscribeForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { hunterName: '' };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.hunterName.length == 0) {
            alert('Enter your name!');
            return
        };
        this.props.dispatch(actionAddHunter(this.state.hunterName));
        this.setState({ hunterName: '' });
    }

    onChangeName = (event) => {
        this.state.hunterName = event.target.value;
        this.setState({ hunterName: this.state.hunterName });
        
        const existingItem = this.props.hunters.filter((elem) => {
            return elem === this.state.hunterName;
        });
        if (existingItem.length > 0) {
            alert('This name is already exist');
            this.setState({ hunterName: '' })
        };
    }

    render() {
        const hunters = this.props.hunters;
        const list = hunters && hunters.map ? hunters.map((item, index) => { return <div key={index}>{item}</div>; }) : "";
        return (
            <div className="container">
                <h2>Subscribe form</h2>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Your name:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control"
                                id="name" placeholder="Enter your name"
                                value={this.state.hunterName} onChange={this.onChangeName} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Password:</label>
                        <div className="col-sm-5">
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" />
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
