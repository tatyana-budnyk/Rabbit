import React, { PropTypes } from 'react';
import { actionAddHunter } from '../../actions/actionAddHunter';
import { actionDeleteHunter } from '../../actions/actionDeleteHunter';
import { connect } from 'react-redux';

class SubscribeForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { hunter: { hunterName: '' } };

        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit() {
        this.props.dispatch(actionAddHunter(this.state.hunter));
    }

    handleDelete() {
        this.props.dispatch(actionDeleteHunter(this.state.hunter));
    }

    onChangeName(event) {
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
            <form >
                <input type="text"
                    value={this.state.hunter.hunterName}
                    placeholder="Enter your name"
                    onChange={this.onChangeName} />
                <button type="button" onClick={this.handleSubmit}>Subscribe</button>
                <button type="button" onClick={this.handleDelete}>Unsubscribe</button>
                <ul>{list}</ul>
            </form>
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