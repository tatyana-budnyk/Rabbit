import React from 'react';

class SubscribeForm extends React.Component {
    render() {
        return(
            <div>
                <h1>Form</h1>
                <label>Enter your name:</label>
                <input type="text" />
                <button type="submit">Subscribe</button>
            </div>
        ); 
    } 
}

export default SubscribeForm;