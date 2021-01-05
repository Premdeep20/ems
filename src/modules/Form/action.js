export const SetEventActionTypes = {
    SET_EVENT: 'SET_EVENT',
    SET_EVENT_SUCCESS: 'SET_EVENT_SUCCESS',
    NAVIGATE: 'NAVIGATE',
};

export const setEvent = (event) => {
    return {
        type: SetEventActionTypes.SET_EVENT,
        payload: event,
    };
};

export const setEventSuccess = (data) => {
    return {
        type: SetEventActionTypes.SET_EVENT_SUCCESS,
        payload: data,
    };
};

export const navigate = () => {
    return {
        type: SetEventActionTypes.NAVIGATE,
    };
};
