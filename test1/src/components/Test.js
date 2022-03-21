import React from 'react';

class Test extends React.Component{
    constructor(props){
        super(props);    
    }
    handleClick = () => {
        console.log('this is: ', this);
    };

    render(){
        return (
            <button onClick={this.handleClick}>Click Me</button>
        );
    }
}
export default Test;