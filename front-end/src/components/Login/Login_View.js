import React, { Component } from "react";
import { connect } from "react-redux";

import Login from './Login'
import { Login_Action, Login_Status } from '../../constants/Login';

const mapStateToProps = (state) => {
    console.log("****************************state:", state);
    return {
        login_status: state.login_Reducer.login_Status,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

    };
};

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getScreen(status) {
        switch (status) {
            case Login_Status.NEW:
                return (
                    <Login />
                );
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                {this.getScreen(this.props.login_status)}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
