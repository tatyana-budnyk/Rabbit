import React, { PropTypes } from 'react';
import { actionAddHunter } from '../../actions/actionAddHunter';
import { connect } from 'react-redux';

class SubscribeForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { hunterName: '' };
        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.dispatch(actionAddHunter(this.state.hunterName));
    }

    onChangeName(event) {
        //event.preventDefault();
        this.setState({ hunterName: event.target.value });
    }

    render() {
        return (
            <form >
                <input type="text"
                    value={this.props.hunterName}
                    placeholder="Enter your name"
                    onChange={this.onChangeName} />
                <button type="button" onClick={this.handleSubmit}>Subscribe</button>
                <ul>{
                    this.props.names ? this.props.names.map((name) =>
                        <li>{name}</li>) : "--no names--"
                }</ul>
            </form>
        );
    }
}

SubscribeForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    hunterName: PropTypes.string,
    names: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        hunterName: state.hunterReducer.name,
        names: state.hunterReducer.names
    };
};

export default connect(mapStateToProps)(SubscribeForm);