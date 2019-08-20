import { connect } from 'react-redux';
import { fetchTracks, fetchSingleTrack } from '../../actions/track_actions';
import Tracks from './tracks';


const mapStateToProps = (state) => {
    return {
        tracks: Object.values(state.tracks.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);