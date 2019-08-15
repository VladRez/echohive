import React from "react";
import { withRouter } from "react-router-dom";


class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        let id  = this.props.match.params.userId;
        this.props.fetchUser(id)
    }

    render() {
        return (<div>{this.props.user ? this.props.user.username : ''}</div>)
    }
}

export default withRouter(UserProfile)