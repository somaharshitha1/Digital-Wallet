import { createStore } from 'redux';
import reducer from "./reducers";
import { initialData } from "./init-data";

// Load user data from localStorage to avoid data loss on refresh or tab close
const initialState = {
    users: (
        localStorage.getItem("data")
            ? JSON.parse(localStorage.getItem("data"))
            : initialData
    )
};

export const store = createStore(
    reducer,
    initialState,
    // Enable Redux DevTools extension for debugging in the browser
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
