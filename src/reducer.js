import { combineReducers } from 'redux'
import { reducer as firebase } from 'react-redux-firebase'
import {slideReducer} from './reducers/reducer'
// import { reducer as firestore } from 'react-redux-firebase'

import { SEARCH_LIST } from './actions';

const initialState = {
    results: []
}
const data = [
    {
        "title": "React – A JavaScript library for building user interfaces",
        "url": "https://reactjs.org/"
    },
    {
        "title": "Tutorial: Intro to React – React",
        "url": "https://reactjs.org/tutorial/tutorial.html"
    },
    {
        "title": "GitHub - facebook/react: A declarative, efficient, and flexible JavaScript",
        "url": "https://github.com/facebook/react"
    },
    {
        "title": "What is React - W3Schools",
        "url": "https://www.w3schools.com/whatis/whatis_react.asp"
    },
]
/*
// Mock data
const data = [
    {
        "title": "React – A JavaScript library for building user interfaces",
        "url": "https://reactjs.org/"
    },
    {
        "title": "Tutorial: Intro to React – React",
        "url": "https://reactjs.org/tutorial/tutorial.html"
    },
    {
        "title": "GitHub - facebook/react: A declarative, efficient, and flexible JavaScript",
        "url": "https://github.com/facebook/react"
    },
    {
        "title": "What is React - W3Schools",
        "url": "https://www.w3schools.com/whatis/whatis_react.asp"
    },
]

export default function searchReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    if(action.type === SEARCH_LIST){
        const results = [];
        for(var item of data){
            if(item.title.indexOf(action.query) !== -1){
                results.push(item);
            }
        }

        return {
            ...state,
            results: results,
        }
    }
}*/

const rootReducer = combineReducers({
  firebase,
  slideReducer
  // firestore // add this for firestore
})

export default rootReducer
