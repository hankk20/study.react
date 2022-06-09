function createStore(reducer) {
    let state;
    const listeners = [];

    const getState = () => {
        return state;
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return function unsubscribe() { // 클로저가 활용되는 것을 확인할 수 있습니다.
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };

    return {
        getState,
        subscribe,
        dispatch
    };
}

function createThunkMiddleware() {
    return ({dispatch, getState}) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        next(action);
    }
}

const store = createStore((s, a) => {});
console.log(store);