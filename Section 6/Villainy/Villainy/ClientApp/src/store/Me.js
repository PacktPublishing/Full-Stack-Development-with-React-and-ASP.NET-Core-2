const signinType = 'SIGNIN';
const signoutType = 'SIGNOUT';
const initialState = { signedin: false };

export const actionCreators = {
    signin: () => ({ type: signinType }),
    signout: () => ({ type: signoutType })
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === signinType) {
        return { ...state, count: state.count + 1 };
    }

    if (action.type === signoutType) {
        return { ...state, count: state.count - 1 };
    }

    return state;
};
