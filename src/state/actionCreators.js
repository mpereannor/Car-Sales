//design the Action Creators that will activate the reducers ( 7 deepwood motte)

import * as types from './actionTypes';

export function removeFeature (feature) {
    return {type: types.REMOVE_FEATURE, payload: feature };
}

export function addFeature (feature) {
    return {type: types.ADD_FEATURE, payload: feature };
}

