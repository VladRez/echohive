import { connect } from 'react-redux';
import { postTrackFile } from '../../actions/track_actions';
import TrackCompose from './track_compose';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newTrack: state.tracks.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postTrack: (data, trackname, user) => dispatch(postTrackFile(data, trackname, user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackCompose);