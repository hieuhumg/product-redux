import React, {Component} from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import Message from "./components/Message";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


class App extends Component {

    render() {
        return (
            <div className="hidden-sn animated deep-purple-skin">
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <Products />
                        <Message />
                        <Cart />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;
