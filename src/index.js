import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import addWorkoutTypeReducer from './store/reducers/addWorkoutType'
import showWorkoutTypesReducer from './store/reducers/showWorkoutTypesReducer'
import updateCountReducer from './store/reducers/updateCountReducer'
import authReducer from './store/reducers/authReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    addWorkoutTypeReducer: addWorkoutTypeReducer,
    showWorkoutTypesReducer: showWorkoutTypesReducer,
    updateCountReducer: updateCountReducer,
    authReducer: authReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();