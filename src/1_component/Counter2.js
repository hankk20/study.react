import React, {Component} from "react";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number : 0
        };
    }

    render() {
        const st = this.state;
        return (

        <div>
            {/*주석*/}
            <h1>{st.number}</h1>
            <button onClick={() =>
                this.setState({number : ++st.number}, () => console.log(`업데이트 : ${this.state.number}`))
            }>클릭</button>
        </div>
        )
    }
}

export default Counter;