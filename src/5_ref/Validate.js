import {Component} from "react";
import './Validate.css'

class Validate extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({password : e.target.value})
    }
    handleClick = () => {
        this.setState({clicked:true, validated:this.state.password === '0000'})
        this.input.focus()
    }

    render() {
        return(
        <div>
            <input ref={(ref) => this.input = ref}
                type={"password"}
                onChange={this.handleChange}
                value={this.state.password}
                className={this.state.clicked?(this.state.validated?'success':'failure'):''}
            ></input>


            <button onClick={this.handleClick}>전송</button>
        </div>
    )
    }
}
export default Validate