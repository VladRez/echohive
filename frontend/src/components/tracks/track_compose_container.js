import { connect } from 'react-redux';
import { composeTrack } from '../../actions/track_actions';
import TrackCompose from './track_compose';

const mapStateToProps = (state) => {
    return {
        // currentUser: state.session.user,
        newTrack: state.tracks.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeTrack: data => dispatch(composeTrack(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackCompose);