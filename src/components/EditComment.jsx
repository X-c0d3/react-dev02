import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const newname = this.getName.value;
        const newmessage = this.getMessage.value;

        const data = {
            newname,
            newmessage
        }

        this.props.dispatch({
            type: 'UPDATE_COMMENT',
            id: this.props.component.id,
            data: data
        });
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input ref={(input) => this.getName = input} required type="text" placeholder="Enter Name" defaultValue={this.props.component.name} />
                <br />  <br />
                <textarea ref={(input) => this.getMessage = input} required rows="5" cols="28" placeholder="Enter message" defaultValue={this.props.component.message} />  <br />  <br />
                <button>Update</button>
            </form>

        </div>);
    }
}

export default connect()(EditComponent);