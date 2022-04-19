import './App.css';
import {Component} from "react";
import Info from "./8_hook/reduce";
import Avg from "./8_hook/memo";

class App extends Component{
    render() {
        return(
            <>
                <Info/>
                <Avg/>
            </>
        )
    }
}

export default App;
