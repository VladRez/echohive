import React from "react";
import { withRouter } from "react-router-dom";
import './user_profile.css'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        let id  = this.props.match.params.userId;
        this.props.fetchUser(id)
    }

    render() {
        let username = this.props.user ? this.props.user.username : '';
        return (<div className="profileContainer">
            <div className="profileHeader">
                <div className="profileHeaderContents">
                    <div className="profileUsername">{username}</div>
                    <div className="profileHeaderBackground">
                        <div className="fillBackground">
                            <div className="backgroundGradient">
                                <div className="fillColor">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default withRouter(UserProfile)