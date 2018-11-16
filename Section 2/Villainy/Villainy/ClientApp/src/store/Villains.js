const requestVillainsType = 'REQUEST_VILLAINS';
const receiveVillainsType = 'RECEIVE_VILLAINS';
const initialState = { forecasts: [], isLoading: false };

export const actionCreators = {
    requestVillains: startDateIndex => async (dispatch, getState) => {
        if (startDateIndex === getState().weatherForecasts.startDateIndex) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
            return;
        }

        dispatch({ type: requestVillainsType, startDateIndex });

        const url = `api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`;
        const response = await fetch(url);
        const forecasts = await response.json();

        dispatch({ type: receiveVillainsType, startDateIndex, forecasts });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestVillainsType) {
        return {
            ...state,
            startDateIndex: action.startDateIndex,
            isLoading: true
        };
    }

    if (action.type === receiveVillainsType) {
        return {
            ...state,
            startDateIndex: action.startDateIndex,
            forecasts: action.forecasts,
            isLoading: false
        };
    }

    return state;
};
