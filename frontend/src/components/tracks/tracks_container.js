import { connect } from 'react-redux';
import { fetchTracks, fetchSingleTrack, fetchNavTrack } from '../../actions/track_actions';
import Tracks from './tracks';


const mapStateToProps = (state) => {
    return {
        tracks: Object.values(state.tracks.all),
        nav_player: state.nav_player
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id)),
        fetchNavTrack: id => dispatch(fetchNavTrack(id))
        // fetchComments: 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);