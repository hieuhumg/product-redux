import React, {Component} from 'react';
import Product from "./Product";


class Message extends Component {

    render() {
        return (
            <h3>
                <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
            </h3>
        )
    }
}

export default Message;
