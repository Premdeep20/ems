import { EventActionTypes } from './action';
import { SetEventActionTypes } from '../Form/action';

const initialState = {
    loading: false,
    eventData: [],
    setEventLoading: false,
    navigate: false,
    freeEvents: [],
    discountEvents: [],
    noDiscountEvents: [],
};

export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case EventActionTypes.GET_EVENTS:
            return {
                ...state,
                loading: true,
                navigate: false,
            };
        case EventActionTypes.GET_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                eventData: state.eventData,
                freeEvents: state.freeEvents,
                discountEvents: state.discountEvents,
                noDiscountEvents: state.noDiscountEvents,
            };
        case SetEventActionTypes.SET_EVENT:
            return {
                ...state,
                setEventLoading: true,
            };
        case SetEventActionTypes.SET_EVENT_SUCCESS:
            return {
                ...state,
                eventData: [...state.eventData, action.payload],
                freeEvents: (action.payload.discountType === 'free') ? [...state.freeEvents, action.payload] :
                    state.freeEvents,
                discountEvents: (action.payload.discountType === 'discount') ? [...state.discountEvents, action.payload] :
                    state.discountEvents,
                noDiscountEvents: (action.payload.discountType === 'noDiscount') ? [...state.noDiscountEvents, action.payload] :
                    state.noDiscountEvents,
                setEventLoading: false,
            };
        case SetEventActionTypes.NAVIGATE:
            return {
                ...state,
                navigate: true,
            };
        default:
            return state;
    }
};

export default eventReducer;
