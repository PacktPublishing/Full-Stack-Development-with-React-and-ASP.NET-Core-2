const requestVillainsType = 'REQUEST_VILLAINS';
const receiveVillainsType = 'RECEIVE_VILLAINS';
const requestVillainType = 'REQUEST_VILLAIN';
const receiveVillainType = 'RECEIVE_VILLAIN';
const addVillainType = 'ADD_VILLAIN';
const initialState = { villains: [], villain: {}, isLoading: false };

let allvillains = [];
let currentvillain = {};

export const actionCreators = {
    requestVillains: () => async (dispatch, getState) => {
        dispatch({ type: requestVillainsType });

        const url = `api/Villains`;
        const response = await fetch(url);
        const allvillains = await response.json();

        dispatch({ type: receiveVillainsType, allvillains });
    },

    requestVillain: (name) => async (dispatch, getState) => {
        dispatch({ type: requestVillainType });

        const url = `api/Villains/GetVillain/${name}`;
        const response = await fetch(url);
        const villain = await response.json();

        dispatch({ type: receiveVillainType, villain });
    },

    addVillain: (villain) => async (dispatch, getState) => {

        dispatch({ type: addVillainType, villain });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestVillainsType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveVillainsType) {
        return {
            ...state,
            villains: action.allvillains,
            isLoading: false
        };
    }

    if (action.type === requestVillainType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveVillainType) {
        currentvillain = action.villain;

        return {
            ...state,
            villain: currentvillain,
            isLoading: false
        };
    }

    if (action.type === addVillainType) {
        //var newvillains = allvillains;

        //newvillains.push({ name: action.villain.name, powers: action.villain.powers, hobbies: action.villain.hobbies })

        //return {
        //    ...state,
        //    villains: newvillains,
        //    isLoading: false
        //};
    }

    return state;
};
