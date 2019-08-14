import React from 'react';

class TrackBox extends React.Component {
    render() {
        return (
            <div>
                
                <h3>{this.props.trackname}</h3>
                <h3>{this.props.src_url}</h3>


            </div>
        );
    }
}


export default TrackBox;