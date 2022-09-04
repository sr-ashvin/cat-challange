import {
    SET_CATS,
    DELETE_CATS,
    GET_CATS,
    CLEAR_CATS_ITEM,
    UPDATE_CATS_ITEM,
} from './actions';
const INITIAL_STATE = {
    list: [],
    item: {},
};

const AddCatReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_CATS:
            const newData = [...state.list, payload];
            return {
                ...state,

                list: newData,
            };
        case DELETE_CATS:
            const deleteByIdList = state.list.filter((item, index) => {
                return index !== payload.id;
            });
            return {
                ...state,
                list: deleteByIdList,
            };
        case GET_CATS:
            const getItemById = state.list.filter((item, index) => {
                return index == payload.id;
            });
            return {
                ...state,
                item: getItemById?.[0],
            };
        case CLEAR_CATS_ITEM:
            return {
                ...state,
                item: payload,
            };
        case UPDATE_CATS_ITEM:
            const updatedData = state?.list.map((item, index) => {
                return index !== payload.id ? item : payload.data;
            });
            console.log('---->', updatedData);
            return {
                ...state,
                list: updatedData,
            };

        default:
            return state;
    }
};

export default AddCatReducer;
