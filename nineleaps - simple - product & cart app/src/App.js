import React, {Component} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products
        }
    }

    addToCart = (itemId) => {
        const currentCartItems = [...this.state.cart.items];
        const addedToCartProductArray = this.state.products
            .filter(product => product.id === itemId)
            .map(product => {
                product.cartQuantity++;
                return product;
            });

        this.setState({
            cart: {
                items: [...currentCartItems, ...addedToCartProductArray]
            },
        });
    }

    incQuantity = (itemId) => {
        const currentCartItems = [...this.state.cart.items];
        const selectedItem = currentCartItems.map(product => {
            if(product.id === itemId)
                product.cartQuantity++;

            return product;
        });

        this.setState({
            cart: {
                items: selectedItem,
            },
        });
    }

    decQuantity = (itemId) => {
        const currentCartItems = [...this.state.cart.items];
        const selectedItem = currentCartItems.map(product => {
            if(product.id === itemId)
                product.cartQuantity--;

            return product;
        }).filter(product => product.cartQuantity !== 0);

        this.setState({
            cart: {
                items: selectedItem,
            },
        });
    }

    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList showQuantity={this.state.showQuantity} products={this.state.products} addToCart={this.addToCart} incQuantity={this.incQuantity} decQuantity={this.decQuantity} />
                    <Cart cart={this.state.cart} incQuantity={this.incQuantity} decQuantity={this.decQuantity} />
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
