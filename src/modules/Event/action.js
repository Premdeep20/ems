export const EventActionTypes = {
    GET_EVENTS: 'GET_EVENTS',
    GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
};

export const getEvents = () => {
    return {
        type: EventActionTypes.GET_EVENTS
    };
};

export const getEventsSuccess = () => {
    return {
        type: EventActionTypes.GET_EVENTS_SUCCESS,
    };
};
