
import React, {Component} from 'react';

class output extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    );
    }
}


export default output;