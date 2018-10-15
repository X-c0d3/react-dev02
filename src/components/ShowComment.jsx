
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import EditComment from './EditComment';

class CommentList extends Component {


    render() {
        debugger;
        return (<div>
            <h4>Show all comments</h4>

            {
             
                this.props.comments.map((comment) => (
                    <div key={comment.id} >
                        {
                           comment.editing ? <EditComment comment={comment} key={comment.id} /> : <Comment key={comment.id} comment={comment} />
                        }

                    </div>
                ))
            }

        </div>);
    }


}

const mapStateToProps = (state) => {
    debugger;
    return {
        comments: state
    }
}

export default connect(mapStateToProps)(CommentList)