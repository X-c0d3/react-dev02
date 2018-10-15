// import { Reducer } from 'redux';
// import { actionTypes } from "../action-types";

// import comment from '../components/comment';
// import { AppState } from '../app-state';
// import { CommentAction } from '../actions/comment-action';

const commentReducer = (state = [], action) => {
    // Actions
    switch (action.type) {
        case 'ADD_COMMENT':
            return state.concat([action.data]);
        case 'DELETE_COMMENT':
            return state.filter((comment) => comment.id !== action.id);
        case 'EDIT_COMMENT':
            return state.filter((comment) => {
                debugger;
                let xxx;
                if (comment.id === action.id) {
                    xxx = {
                        ...comment,
                        editing: true
                    }
                } else {
                    xxx =  comment;
                }

                return xxx;
            });
        case 'UPDATE_COMMENT':
            return state.map((comment) => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        name: comment.newname,
                        message: comment.newmessage,
                        editing: !comment.editing
                    }
                } else
                    return comment;
            });
        default:
            return state;
    }
};

export default commentReducer;