import React, {Component} from 'react';

class Reset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 14
        }
        this.onReset = this.onReset.bind(this);
    }
    onReset()  {
        this.props.onReset(this.state);
    }
    render() {
        return (
            <div className="panel-footer">
                <button type="button" className="btn btn-primary" onClick={ this.onReset }>Reset</button>
            </div>
        );
    }
}

export default Reset;
