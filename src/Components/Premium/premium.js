import React from 'react';
import Nav from '../Nav/nav';
import Header from '../Header/header';
import axios from 'axios';

class Premium extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            premium: []
        }
    }

    componentDidMount(){
        axios.get('api/clothing/Premium').then(results => {
            this.setState({premium: results.data})
        })
    }


    render() {
        const mappedPremium = this.state.premium.map((prem, i) => {
            return(
                <div key={i}>
                    <h3>{prem.category}</h3>
                    <img src={prem.image} className="images"alt=""/>
                </div>
            )
        })
        return(
            <div>
                <Header />
                <Nav />
                {mappedPremium}
            </div>
        )
    }
}

export default Premium