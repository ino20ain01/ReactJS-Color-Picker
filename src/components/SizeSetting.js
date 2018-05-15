import React, {Component, Fragment} from 'react';

class SizeSetting extends Component {

    changeSize(params) {
        this.props.onChangeSize(params);
    }

    render() {
        return (
           <Fragment>
               <div className="panel panel-warning">
                   <div className="panel-heading">
                       <h3 className="panel-title">Size: { this.props.fontSize }px</h3>
                   </div>
               </div>
               <div className="panel-body">
                   <button type="button" className="btn btn-success mr-1" onClick={ () => this.changeSize(-2) }>Giảm</button>
                   <button type="button" className="btn btn-success mr-1" onClick={ () => this.changeSize(+2) }>Tăng</button>
               </div>
           </Fragment>
        );
    }
}

export default SizeSetting;
