import React, {Component} from 'react';

class Show extends Component {

    render() {
        return(

<div>
    <button onClick={this.props.click} style={{margin: '25px'}}>Click me</button>
    <div id='mydiv' style={{display:'none'}}>
         <h1>Redux working</h1>
    </div>
</div>
        )
    }
}

export default Show;