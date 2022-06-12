//redux Store
function createStore(reducer) {
    let state;
    const listeners = [];

    const getState = () => {
        return state;
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return function unsubscribe() {
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

const thunk = store => next => action =>
    typeof action === 'function' ?
        action(store.dispatch, store.getState) :
        next(action);

function applyMiddleware(store, middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse();

    let dispatch = store.dispatch;
    middlewares.forEach(middleware => {
            dispatch = middleware(store)(dispatch) //logger
            console.log(dispatch)
        }
    );

    return Object.assign({}, store, { dispatch });
}

const logger2 = store => next => action => {
    console.log(`logger start2 ${action}`)
    const state = store.getState();
    console.log(state);
    next(action)
    console.log(`logger end2 ${action}`)
}

const logger = store => next => action => {
    console.log(`logger start ${action}`)
    next(action)
    console.log(`logger end ${action}`)
}


const store = createStore((state, action) => {
    console.log(`reduce ${action}`)
});

const midleStore = applyMiddleware(store, [logger, thunk,logger2]);

const getId = (id) => (dispatch, getState) => {
    console.log("thunk log")
}


//midleStore.dispatch({type: "TEST"})
midleStore.dispatch(getId(1))