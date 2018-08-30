import React from 'react';
import './home.css'
import Header from '../Header/header';
import Nav from '../Nav/nav.js';




class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount(){
        setTimeout(() => this.setState({loading: false}), 100)
    }

    linkTo(){
        this.props.history.push('/mens-clothing')
    }

    linkTo2(){
        this.props.history.push('/women-clothing')
    }

    render(){
        const { loading } = this.state;

        if(loading){
            return null;
        }
        return(
        <div className="Body">
         <Header />
         <Nav />
            <div className="body-white">
                    <div onClick={() => this.linkTo()}className="pics shalley">
                        <button className="ShalButton">SHOP NEW MEN'S </button>
                    </div>
                    <div onClick={() => this.linkTo2()}className="becca shalley">
                        <button className="rightButton">SHOP NEW WOMEN'S
                    </button> 
                </div>
            </div>
        </div>
        )
    }
}

export default Home