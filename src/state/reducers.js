//create one reducer function per slice of state (3 last hearth)

import * as types from './actionTypes';

const initialValue = sth;

export function removeReducer(state = initialValue, action) {
    switch (action.type) {
        case types.REMOVE_FEATURE:
            return {
                ...state,

     };

    default: 
    return state;
    }
}

const initialValueB = sth;
export function buyReducer(state = initialValueB, action) {
    switch (action.type) {
        case type.BUY_ITEM: 
            return {
                ...state, 
            }
    }
}