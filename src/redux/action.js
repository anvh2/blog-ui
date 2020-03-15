export const loadHeader = (background, head, sub) => ({
    type: "LOAD_HEADER",
    background,
    head,
    sub
})

export const loadContent = (content) => ({
    type: "LOAD_CONTENT",
    content
})

export const loadMeta = (createDate, readTime) => ({
    type: "LOAD_META",
    createDate,
    readTime
})

export const loadAuthor = (name, avatar) => ({
    type: "LOAD_AUTHOR",
    name,
    avatar
})

export const handlerPostClick = (background, head, sub, meta, author, time) => ({
    type: "POST_CLICK",
    background,
    head,
    sub,
    meta,
    author,
    time
})

export const handleChangeBackground = (background) => ({
    type: "CHANGE_BACKGROUND",
    background
})

export const handleChangeEditor = (editorContent) => ({
    type: "CHANGE_EDITOR",
    editorContent
})

export const handleChangeHeaderTitle = (title) => ({
    type: "CHANGE_HEADER_TITLE",
    title
})

export const handleChangeHeaderSub = (subTitle) => ({
    type: "CHANGE_HEADER_SUB",
    subTitle
})