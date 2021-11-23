import React, { Component } from 'react';
import User from './User';

class Home extends Component {
    //DECLAR STATE
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            cart: []
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    //METHOD
    handleAddToCart(user) {
        const newCart = [...this.state.cart, user];
        this.setState({ cart: newCart });
        console.log(this.state.cart);
    }
    //LOADING DATA
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ users: data }))
    }
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <h3>Cart: {this.state.cart.length}</h3>
                <p>User count {this.state.users.length}</p>
                {
                    this.state.users.map(user =>
                        <User
                            key={user.id}
                            user={user}
                            handleAddtoCart={this.handleAddToCart}
                        />)
                }
            </div>
        );
    }
}

export default Home;