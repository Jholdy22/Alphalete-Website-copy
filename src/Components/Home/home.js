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

    linkTo3(){
        this.props.history.push('/premium-clothing')
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
            <div className="first-white">
                    <div onClick={() => this.linkTo()}className="pics shalley">
                        <button className="leftButton">SHOP NEW MEN'S </button>
                    </div>
                    <div onClick={() => this.linkTo2()}className="becca shalley">
                        <button className="rightButton">SHOP NEW WOMEN'S
                    </button> 
                </div>
            </div>
            <div className="second-White">
                    <div onClick={() => this.linkTo3()}className="premium">
                        <button className="premiumButton">SHOP PREMIUM</button>
                    </div>
            </div>
                    <div className="emailWhite">
                        <div className="greyBox">
                            <div>
                                <h1 className="find_out_first">FIND OUT FIRST</h1>
                                <h2>Promotions, new products and sales. Directly to your inbox</h2>
                                <input className="emailBox" type="text" placeholder="Your email"/>
                                {/* <button type="" className="btn btn-info">
                                    <span className="glyphicon glyphicon-chevron-right  arrowGlyph"></span> */}
                                {/* </button> */}
                            </div>
                        </div>
                    </div>
        </div>
        )
    }
}

export default Home