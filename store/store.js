import { configureStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper'
//import rootReducer from '../reducers'


const initialState = {};

export const store = configureStore(
    () => {},
    initialState,
    {}
);

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);