import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 14
        }
        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
    }

    onSetColor (params) {
        this.setState({
            color: params
        });
    }

    onChangeSize(params) {
        this.setState({
            fontSize: (this.state.fontSize + params >= 8 && this.state.fontSize + params <= 36) ? this.state.fontSize + params : this.state.fontSize
        });
    }

    onReset = (params) => {
        this.setState(params);
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <ColorPicker color={ this.state.color } onReceiveColor={ this.onSetColor } />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting fontSize={ this.state.fontSize } onChangeSize={ this.onChangeSize } />
                        <Reset onReset={ this.onReset } />
                    </div>
                    <Result color={ this.state.color } fontSize={ this.state.fontSize } />
                </div>
            </div>
        );
    }
}

export default App;
