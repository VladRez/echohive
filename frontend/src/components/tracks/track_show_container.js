import { connect } from 'react-redux';
import { fetchSingleTrack } from '../../actions/track_actions';
import TrackShow from './track_show';

const mapStateToProps = (state) => {
    return {
        tracks: Object.values(state.tracks.all),
        track: state.tracks.track
        // comments: 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);