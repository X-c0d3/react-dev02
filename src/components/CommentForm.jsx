import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            name,
            message,
            editing: false
        }
        this.getName.value = '';
        this.getMessage.value = '';
        console.log(data);

        // update data to store
        this.props.dispatch({
            type: 'ADD_COMMENT',
            data: data
        });
    }


    render() {

        debugger;
        return (<div>
            <h2>Add Comment</h2>
            <form onSubmit={this.handleSubmit}>
                <input ref={(input) => this.getName = input} required
                    type="text"
                    placeholder="Enter Name"
                    //defaultValue = {this.props.component.name}
                     />
                <br />  <br />
                <textarea ref={(input) => this.getMessage = input} required rows="5" cols="28"
                    placeholder="Enter message"
                    //defaultValue = {this.props.component.message}
                     />  <br />  <br />
                <button>Add</button>
            </form>
        </div>);
    }
}



export default connect()(CommentForm);