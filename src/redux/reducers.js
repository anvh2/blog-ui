const INIT_STATE = {
    blogID: "",
    headerTitle: "",
    headerSub: "",
    headerBg: "",
    headerMeta: "",
    createDate: "",
    readTime: 0,
    postAuthor: "",
    postedTime: "",
    postContent: "",
    editorContent: null,
}

export const Reducers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOAD_HEADER":
            return {
                ...state,
                headerTitle: action.head,
                headerSub: action.sub,
                headerBg: action.background
            };
        case "LOAD_CONTENT": {
            return {
                ...state,
                postContent: action.content
            }
        }
        case "LOAD_META": {
            return {
                ...state,
                createDate: action.createDate,
                readTime: action.readTime
            }
        }
        case "POST_CLICK": {
            return {
                ...state,
                headerTitle: action.head,
                headerSub: action.sub,
                headerBg: action.background,
                headerMeta: action.meta,
                postAuthor: action.author,
                postedTime: action.time
            }
        }
        case "CHANGE_BACKGROUND": {
            return {
                ...state,
                headerBg: action.background
            }
        }
        case "CHANGE_EDITOR": {
            return {
                ...state,
                editorContent: action.editorContent
            }
        }
        case "CHANGE_HEADER_TITLE": {
            return {
                ...state,
                headerTitle: action.title
            }
        }
        case "CHANGE_HEADER_SUB": {
            return {
                ...state,
                headerSub: action.subTitle
            }
        }
        default:
            return state;
    }
}