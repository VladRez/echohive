import { connect } from 'react-redux';
import { postTrackFile } from '../../actions/track_actions';
import TrackCompose from './track_compose';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newTrack: state.tracks.new
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        postTrack: (data, trackname, user, username) => 
            dispatch(postTrackFile(data, trackname, user, username, ownProps.history))
            };
    
};


export default connect(mapStateToProps, mapDispatchToProps)(TrackCompose);