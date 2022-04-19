import './App.css';
import {Component} from "react";
import LifeCycle from "./7_lifecycle/LifeCycle";

function getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

class App extends Component{
    state = {
        color : '#000000'
    }
    handleClick = () => {
        this.setState({
            color : getRandomColor()
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <LifeCycle color={this.state.color}/>
            </div>
        )
    }

}

export default App;
