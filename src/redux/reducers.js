const INIT_STATE = {
    pageHeader: "",
    pageSub: "",
    pageBG: "",
}

export const Reducers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "MENU_CLICK":
            return {
                ...state,
                pageBG: action.background,
                pageHeader: action.head,
                pageSub: action.sub
            };
        default:
            return state;
    }
}