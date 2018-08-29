import React from 'react';
import './header.css';
import '../Cart/cart'

class header extends React.Component {
    render() {
        return (
            <div>
                <header className="header-tag">
                    <h1 className="alpha-header">
                        <a href="http://localhost:3000/"> ALPHALETE</a>
                    </h1>
                    <div className="search-cart">
                        <a href="/Cart">
                            <span className="glyphicon glyphicon-shopping-cart"></span>
                        </a>
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