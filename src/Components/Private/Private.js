import React from 'react';
import axios from 'axios';
import {updateUser} from '../../ducks/reducer';
import {connect} from 'react-redux';

class Private extends React.Component {
    constructor(props){
    super(props)
        this.state = {
            users: {}
        }
    }
    async componentDidMount(){
        let res = await axios.get('/api/user-data')
        this.props.updateUser(res.data)
    }
    render(){
        console.log(this.props);
        let { users } = this.props
        return(
            <div>
                <h1>Acount Details</h1>
                <a href="http://localhost:3000/">
                <button>Log Out</button>
                </a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {
    updateUser 
})(Private)