import React, { Component } from 'react';

class User extends Component {
    render() {
        const { name, email, phone } = this.props.user;
        return (
            <div style={{ border: '1px solid purple', padding: '11px', margin: '10px' }}>
                <h2>Name: {name}</h2>
                <small>Email: {email}</small>
                <br />
                <small>Phone: {phone}</small>
                <button onClick={e => this.props.handleAddtoCart(name)}>add to cart</button>
            </div >
        );
    }
}

export default User;