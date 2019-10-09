//design the Action Creators that will activate the reducers ( 7 deepwood motte)

import * as types from './actionTypes';

export function remover () {
    return {type: types.REMOVE_FEATURE };
}

export function buyer () {
    return {type: types.BUY_ITEM };
}

