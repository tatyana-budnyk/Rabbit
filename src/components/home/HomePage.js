import React, { PropTypes } from 'react';
//import {connect} from 'redux';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, constructor);
        this.state =  {x: 0, y: 0};
        this.handleClick = this.handleClick.bind(this);
    }

 handleClick () {
    alert("Hello!!!");
 }

//HomePage.propTypes = {
//    x: this.state.x,
 //   y: this.state.y
//}

    render() {
        return(
            <div>
                <h1>Coordinates: x = {this.props.x} y = {this.props.y} </h1>
                <button type="button" onClick={this.handleClick}>MOVE RABBIT</button>
            </div>
        ); 
    } 
}

/*function mapStateToProps(){
    return {
        x: state.x,
        y: state.y
    }
}
connect (mapStateToProps)(HomePage);
*/
export default HomePage;