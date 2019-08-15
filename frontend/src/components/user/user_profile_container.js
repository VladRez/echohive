import { connect } from 'react-redux';
import { fetchUserTracks } from '../../actions/track_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
    return {
        tracks: Object.values(state.tracks.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserTracks: (id) => dispatch(fetchUserTracks(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);