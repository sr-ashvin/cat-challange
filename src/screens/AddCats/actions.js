const CATS = '[Cats]';
export const SET_CATS = `${CATS} Set Request`;
export const DELETE_CATS = `${CATS} Delete Request`;
export const GET_CATS = `${CATS} Get Request`;
export const CLEAR_CATS_ITEM = `${CATS} Clear Item Request`;
export const UPDATE_CATS_ITEM = `${CATS} Update Item Request`;
export const FILTER_CATS_ITEM = `${CATS} filter Item Request`;
export const CLEAR_FILTER_CATS_ITEM = `${CATS} Clear filter Item Request`;

export const setCatDetail = (data) => {
    return async (dispatch) => {
        dispatch({
            type: SET_CATS,
            payload: data,
        });
    };
};
export const deleteCatItem = (id) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_CATS,
            payload: { id: id },
        });
    };
};
export const getCatDetailById = (id) => {
    return async (dispatch) => {
        dispatch({
            type: GET_CATS,
            payload: { id: id },
        });
    };
};
export const clearCatDetailById = () => {
    return async (dispatch) => {
        dispatch({
            type: CLEAR_CATS_ITEM,
            payload: {},
        });
    };
};
export const updateCatDetail = (data, id) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_CATS_ITEM,
            payload: { data, id },
        });
    };
};
export const getFilterData = (text) => {
    return async (dispatch) => {
        dispatch({
            type: FILTER_CATS_ITEM,
            payload: { text: text },
        });
    };
};
export const clearFilterData = () => {
    return async (dispatch) => {
        dispatch({
            type: CLEAR_FILTER_CATS_ITEM,
            payload: [],
        });
    };
};
