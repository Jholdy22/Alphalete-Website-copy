import React from 'react';
import './header.css';
import '../Cart/cart';
import {Link} from 'react-router-dom';


class header extends React.Component {
    render() {
        return (
            <div>
                <header className="header-tag">
                    <h1 className="alpha-header">
                        <a href={process.env.REACT_APP_LOGIN}> ALPHALETE</a>
                    </h1>
                    <div className="search-cart">
                        <Link to="/Cart">
                            <span className="glyphicon glyphicon-shopping-cart"></span>
                        </Link>
                        <i className="glyphicon glyphicon-search"></i>
                    </div>
                </header>
                <nav className="navBar">
                </nav>
            </div>
        )
    }
}

export default header