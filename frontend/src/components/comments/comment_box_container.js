import {connect} from react-redux;
import CommentBox from "./comment_box";
import { withRouter } from 'react-router';

mapStateToProps(state) {
    return {
        
    }
}

mapDispatchToProps = dispatch => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentBox));