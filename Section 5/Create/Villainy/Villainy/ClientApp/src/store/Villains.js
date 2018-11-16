const requestVillainsType = 'REQUEST_VILLAINS';
const receiveVillainsType = 'RECEIVE_VILLAINS';
const requestVillainType = 'REQUEST_VILLAIN';
const receiveVillainType = 'RECEIVE_VILLAIN';
const addVillainType = 'ADD_VILLAIN';
const updateVillainType = 'UPDATE_VILLAIN';
const deleteVillainType = 'DELETE_VILLAIN';
const initialState = {villains: [], villain: {}, isLoading: false };

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
        const baseURL = "/api/villains";

        const data = JSON.stringify(
            { name: villain.name, powers: villain.powers, hobbies: villain.hobbies }
        );

        const fetchTask = fetch(baseURL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: data
        })
            .then((data) => {
                dispatch({ type: addVillainType, villain: data });
            });
    },

    updateVillain: (villain) => async (dispatch, getState) => {
        const baseURL = "/api/villains";

        const data = JSON.stringify(
            { name: villain.name, powers: villain.powers, hobbies: villain.hobbies }
        );

        const fetchTask = fetch(baseURL, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: data
        })
            .then((data) => {
                dispatch({ type: updateVillainType, villain: data });
            });
    },

    deleteVillain: (villain) => async (dispatch, getState) => {
        const baseURL = "/api/villains";

        const fetchTask = fetch(baseURL + "/" + villain.name, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
            .then((data) => {
                dispatch({ type: deleteVillainType });
            });
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
        allvillains = action.allvillains;

        return {
            ...state,
            villains: allvillains,
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

        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === updateVillainType) {

        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === deleteVillainType) {

        return {
            ...state,
            isLoading: false
        };
    }

    return state;
};
