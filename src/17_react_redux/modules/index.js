import {configureStore} from '@reduxjs/toolkit'
import counter from "./counter";
import todos from "./todos";

const store = configureStore({
    reducer: {
        counter,
        todos
    }
});