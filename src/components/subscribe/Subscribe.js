import React, { PropTypes } from 'react';
import { addHunter } from '../../actions/addHunter';
import { connect } from 'react-redux';

class SubscribeForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {hunterName: '' };
        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.dispatch(addHunter(this.state.hunterName));

    }

    onChangeName(event) {
        //event.preventDefault();
        this.setState({ hunterName: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.hunterName}
                    placeholder="Enter your name"
                    onChange={this.onChangeName} />
                <button type="submit">Subscribe</button>
            </form>
        );
    }
}

SubscribeForm.propTypes = {
    dispatch: PropTypes.func.isRequired
};


function mapStateToProps (state) {
    return {
        hunterName: state.addHunter.hunterName
    };
}

export default connect(mapStateToProps)(SubscribeForm);